import Image from 'next/image';
import Comment from './Comment';
import { fetchProductRatingByProductId } from '@/lib/utils/actions';
import Rating from './Rating';

const ReviewCard = async ({
  comment,
  authorImageUrl,
  authorName,
}: {
  comment: string;
  authorImageUrl: string;
  authorName: string;
}) => {
  const { message, data } = await fetchProductRatingByProductId(authorName);
  console.log(message);
  const sendingShape = [data as { rating: number }];
  return (
    <div className='min-w-5/12 rounded-xl border border-gray-100 p-5 shadow-md'>
      <div className='flex items-center gap-3'>
        <div className='relative h-10 w-10 overflow-hidden rounded-full'>
          <Image src={authorImageUrl} alt={authorName} fill className='object-cover' />
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-sm dark:text-white'>{authorName}</p>
          <Rating data={sendingShape} />
        </div>
      </div>
      <Comment comment={comment} />
    </div>
  );
};

export default ReviewCard;
