import Image from 'next/image';
import Comment from './Comment';
import Rating from '../singleProduct/ProductRating';

const ReviewCard = async ({
  rating,
  comment,
  image,
  name,
}: {
  rating: number;
  comment: string;
  image: string;
  name: string;
}) => {
  const sendingShape = [{ rating }];
  return (
    <div className='min-w-5/12 rounded-xl border border-gray-100 p-5 shadow-md dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition duration-300'>
      <div className='flex items-center gap-3'>
        <div className='relative h-10 w-10 overflow-hidden rounded-full'>
          <Image src={image} alt={name} fill className='object-cover' />
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-sm dark:text-white'>{name}</p>
          <Rating data={sendingShape} />
        </div>
      </div>
      <Comment comment={comment} />
    </div>
  );
};

export default ReviewCard;
