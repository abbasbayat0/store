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
      <div className='mt-10 flex flex-wrap justify-around gap-8'>
        {data.map((item, i) => {
          const info = {
            rating: item.rating,
            comment: item.comment,
            name: item.authorName,
            image: item.authorImageUrl,
          };
          return <ReviewCard key={i} {...info} />;
        })}
      </div>
    </div>
  );
};

export default ProductReviews;
