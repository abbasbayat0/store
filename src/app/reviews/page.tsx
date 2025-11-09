import EmptyList from '@/components/shared/global/EmptyList';
import SectionTitle from '@/components/shared/global/SectionTitle';
import DeleteIcon from '@/components/shared/reviews/DeleteIcon';
import ReviewCard from '@/components/shared/reviews/ReviewCard';
import { fetchProductReviewByUser } from '@/lib/utils/actions';

const page = async () => {
  const { data } = await fetchProductReviewByUser();
  if (!data) return <EmptyList text='you have no reviews' />;
  return (
    <div>
      <SectionTitle title='your reviews' />
      <section className='flex flex-wrap justify-around gap-8'>
        {data.map((review) => {
          const { id, rating, comment } = review;
          const { name, image } = review.product;
          const info = { rating, comment, name, image };
          return (
            <ReviewCard key={id} {...info}>
              <DeleteIcon reviewId={id} />
            </ReviewCard>
          );
        })}
      </section>
    </div>
  );
};

export default page;
