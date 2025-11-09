import EmptyList from '@/components/shared/global/EmptyList';
import SectionTitle from '@/components/shared/global/SectionTitle';
import ReviewCard from '@/components/shared/reviews/ReviewCard';
import { fetchProductReviewByUser } from '@/lib/utils/actions';

const page = async () => {
  const { data } = await fetchProductReviewByUser();
  if (!data) return <EmptyList text='you have no reviews' />;
  return (
    <div>
      <SectionTitle title='your reviews' />
      <section className='flex flex-wrap gap-8 justify-around'>
        {data.map((review) => {
          const { id, rating, comment } = review;
          const { name, image } = review.product;
          const info = { rating, comment, name, image };
          return <ReviewCard key={id} {...info} />;
        })}
      </section>
    </div>
  );
};

export default page;
