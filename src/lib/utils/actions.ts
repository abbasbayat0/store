'use server';

import { redirect } from 'next/navigation';
import db from './prisma';
import { Product } from '@prisma/client';
import { unstable_cache } from 'next/cache';
import { raw } from '@prisma/client/runtime/library';
import { catchError } from './errorCatch';
import { getUser } from './getUser';
import { productSchema, validationWithZod } from './zodSchema';

export const getFeatured = unstable_cache(
  async () => {
    let data: Product[] = [];
    let message = '';
    try {
      data = await db.product.findMany({
        where: { featured: true },
      });
      message = `success, you have ${data.length} products`;
    } catch (error) {
      message = `failed because of ${error}`;
    }
    return { message, data };
  },
  ['featured'],
  { tags: ['featured'], revalidate: 1800 },
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
  { tags: ['all'], revalidate: 1800 },
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
  { tags: ['unique'], revalidate: 1800 },
);

export const createNewProduct = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> => {
  const user = await getUser();
  try {
    const rawData = Object.fromEntries(formData);
    const validated = validationWithZod(productSchema, rawData);
    await db.product.create({
      data: {
        ...validated,
        image: '../../app/favicon.ico',
        clerkId: user.id,
      },
    });
    return { message: 'created' };
  } catch (error) {
    return catchError(error);
  }
};
