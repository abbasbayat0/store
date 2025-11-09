'use server';

import { redirect } from 'next/navigation';
import db from './prisma';
import { Product } from '@prisma/client';
import { revalidatePath, revalidateTag, unstable_cache } from 'next/cache';
import { catchError } from './errorCatch';
import { getAdmin, getUser } from './getUser';
import { imageSchema, productSchema, reviewSchema, validationWithZod } from './zodSchema';
import { deleteImage, uploadImage } from './supabase';

export const getFeatured = unstable_cache(
  async () => {
    let data: Product[] = [];
    let message = '';
    try {
      data = await db.product.findMany({
        where: { featured: true },
        orderBy: {
          createdAt: 'desc',
        },
      });
      message = `success, you have ${data.length} products`;
    } catch (error) {
      message = `failed because of ${error}`;
    }
    return { message, data };
  },
  ['featured'],
  { tags: ['featured', 'all'] },
);

export const getAll = unstable_cache(
  async (search: string = '') => {
    let data: Product[] = [];
    let message = '';
    try {
      data = await db.product.findMany({
        where: {
          OR: [
            { name: { contains: search, mode: 'insensitive' } },
            { company: { contains: search, mode: 'insensitive' } },
          ],
        },
        orderBy: {
          createdAt: 'desc',
        },
      });
      message = `success, you have ${data.length} products`;
    } catch (error) {
      message = `failed because of ${error}`;
    }
    return { message, data };
  },
  ['all'],
  { tags: ['all'] },
);

export const getSingle = unstable_cache(
  async (id: string) => {
    let data: Product | null = null;
    let message = '';
    try {
      data = await db.product.findUnique({
        where: {
          id: id,
        },
      });
      if (!data) redirect('/products');
      message = `product with id:${id} now available in data`;
    } catch (error) {
      message = `failed because of ${error}`;
    }
    return { message, data };
  },
  ['unique'],
  { tags: ['unique', 'all'] },
);

export const createNewProduct = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> => {
  const user = await getAdmin();
  try {
    const rawData = Object.fromEntries(formData);
    const validated = validationWithZod(productSchema, rawData);

    const image = formData.get('image') as File;
    const validatedImage = validationWithZod(imageSchema, { image });
    const fullPath = await uploadImage(validatedImage.image);

    await db.product.create({
      data: {
        ...validated,
        image: fullPath,
        clerkId: user.id,
      },
    });
    revalidateTag('all');
    return { message: 'created' };
  } catch (error) {
    return catchError(error);
  }
};

export const getAdminProducts = unstable_cache(
  async (): Promise<{ message: string; data: Product[] }> => {
    let data: Product[] = [];
    let message = '';
    try {
      data = await db.product.findMany({
        orderBy: {
          createdAt: 'desc',
        },
      });
      message = `success, you have ${data.length} products`;
    } catch (error) {
      return { ...catchError(error), data };
    }
    return { message, data };
  },
  ['adminProducts'],
  { tags: ['adminProducts', 'all'] },
);

export const deleteProduct = async (prevState: { id: string }) => {
  await getAdmin();
  try {
    const data = await db.product.delete({
      where: { id: prevState.id },
    });
    await deleteImage(data.image);
    revalidateTag('all');
    return { message: 'deleted' };
  } catch (error) {
    return catchError(error);
  }
};

export const updateProduct = async (prevState: Product, formData: FormData) => {
  await getAdmin();
  try {
    const id = formData.get('id') as string;
    const rawData = Object.fromEntries(formData);
    delete rawData.image;
    console.log(rawData);
    const validated = validationWithZod(productSchema, rawData);

    const data = await db.product.update({
      where: { id: id },
      data: { ...validated },
    });
    const image = formData.get('image') as File;
    let fullPath = null;
    if (image.size) {
      await deleteImage(data.image);
      const validatedImage = validationWithZod(imageSchema, { image });
      fullPath = await uploadImage(validatedImage.image);
    }
    if (fullPath) {
      await db.product.update({
        where: { id: id },
        data: { image: fullPath },
      });
    }
    revalidateTag('all');
    return { message: 'updated' };
  } catch (error) {
    return catchError(error);
  }
};

export const fetchFavoriteId = async ({ productId }: { productId: string }) => {
  const user = await getUser();
  const favoriteId = await db.favorite.findFirst({
    where: {
      productId,
      clerkId: user?.id,
    },
    select: {
      id: true,
    },
  });
  return favoriteId?.id || null;
};

export const toggleFavoriteAction = async (prevState: {
  productId: string;
  favoriteId: string | null;
  pathName: string;
}) => {
  const user = await getUser();
  const { productId, favoriteId, pathName } = prevState;
  try {
    if (favoriteId) {
      await db.favorite.delete({
        where: { id: favoriteId },
      });
    } else {
      await db.favorite.create({
        data: {
          productId,
          clerkId: user.id,
        },
      });
    }
    revalidatePath(pathName);
    return { message: 'toggle favorite action' };
  } catch (error) {
    catchError(error);
  }
};

export const fetchFavorites = async () => {
  const { id } = await getUser();
  try {
    const favoriteProducts = await db.favorite.findMany({
      where: {
        clerkId: id,
      },
      include: {
        product: true,
      },
    });
    return favoriteProducts;
  } catch (error) {
    catchError(error);
  }
};

export const createReviewAction = async (prevState: unknown, formData: FormData) => {
  const user = await getUser();
  try {
    const rawData = Object.fromEntries(formData);
    const validatedData = validationWithZod(reviewSchema, rawData);
    await db.review.create({
      data: {
        ...validatedData,
        clerkId: user.id,
      },
    });
    revalidatePath(`/products/${rawData.productId}`);
    return { message: `review added` };
  } catch (error) {
    catchError(error);
  }
};
export const fetchProductRating = async (productId: string) => {
  await getUser();
  let message = '';
  let data: { rating: number }[] = [];
  try {
    const rating = await db.review.findMany({
      where: {
        productId,
      },
      select: {
        rating: true,
      },
    });
    message = 'successfully received';
    data = rating;
    return { message, data };
  } catch (error) {
    return { message: catchError(error), data };
  }
};
export const fetchProductReviews = async (productId: string) => {
  await getUser();
  let message = '';
  let data: { rating: number; authorImageUrl: string; comment: string; authorName: string }[] = [];
  try {
    const rating = await db.review.findMany({
      where: {
        productId,
      },
      select: {
        rating: true,
        authorImageUrl: true,
        comment: true,
        authorName: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    message = 'successfully received';
    data = rating;
    return { message, data };
  } catch (error) {
    return { message: catchError(error), data };
  }
};
export const fetchProductReviewByUser = async () => {
  const user = await getUser();
  let message = '';
  let data = null;
  try {
    data = await db.review.findMany({
      where: { clerkId: user?.id },
      select: {
        id: true,
        rating: true,
        comment: true,
        product: {
          select: {
            image: true,
            name: true,
          },
        },
      },
    });
    message = 'success';
    return { message, data };
  } catch (error) {
    return { message: catchError(error), data };
  }
};
export const deleteReviewAction = async (prevState: { reviewId: string }) => {
  const user = await getUser();
  const { reviewId } = prevState;
  try {
    await db.review.delete({
      where: {
        id: reviewId,
        clerkId: user?.id,
      },
    });
    revalidatePath('/reviews');
    return { message: `deleteReviewAction` };
  } catch (error) {
    catchError(error);
  }
};
export const findExistingReviews = async () => {
  const user = await getUser();
  try {
    return { message: `findExistingReviews` };
  } catch (error) {
    catchError(error);
  }
};
