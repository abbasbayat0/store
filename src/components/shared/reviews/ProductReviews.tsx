import { fetchProductReviews } from '@/lib/utils/actions';
import ReviewCard from './ReviewCard';
import SectionTitle from '../global/SectionTitle';

const ProductReviews = async ({ productId }: { productId: string }) => {
  const { message, data } = await fetchProductReviews(productId);
  if (message !== 'successfully received')
    return (
      <div className='mt-10 flex items-center justify-center'>
        <p>There Is No Comment For This Product</p>
      </div>
    );
  return (
    <div className='mt-20'>
      <SectionTitle title='Product Reviews' />
      <div className='mt-10 flex flex-wrap gap-8 justify-around'>
        {data.map((item, i) => {
          return <ReviewCard key={i} {...item} />;
        })}
      </div>
    </div>
  );
};

export default ProductReviews;
