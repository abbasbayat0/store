import Image from 'next/image';
import Comment from './Comment';

const ReviewCard = ({
  rating,
  comment,
  authorImageUrl,
  authorName,
}: {
  rating: number;
  comment: string;
  authorImageUrl: string;
  authorName: string;
}) => {
  return (
    <div className='min-w-5/12'>
      <div>
        <div className='w-10 h-10 rounded-full relative overflow-hidden'>
          <Image src={authorImageUrl} alt={authorName} fill className='object-cover' />
        </div>
        <div></div>
      </div>
      <Comment />
    </div>
  );
};

export default ReviewCard;
