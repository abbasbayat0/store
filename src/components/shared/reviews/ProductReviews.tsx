import { fetchProductRating } from '@/lib/utils/actions';

const ProductReviews = async ({ productId }: { productId: string }) => {
  const { message, data } = await fetchProductRating(productId);
  return <div>ProductReviews</div>;
};

export default ProductReviews;
