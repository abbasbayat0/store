import Image from 'next/image';
import Comment from './Comment';
import Rating from '../singleProduct/ProductRating';
import { ReactNode } from 'react';

const ReviewCard = async ({
  rating,
  comment,
  image,
  name,
  children,
}: {
  rating: number;
  comment: string;
  image: string;
  name: string;
  children?: ReactNode;
}) => {
  const sendingShape = [{ rating }];
  return (
    <div className='min-w-5/12 rounded-xl border border-gray-100 p-5 shadow-md transition duration-300 hover:border-gray-200 dark:border-gray-800 dark:hover:border-gray-700'>
      <div className='flex justify-between'>
        <div className='flex items-center gap-3'>
          <div className='relative h-10 w-10 overflow-hidden rounded-full'>
            <Image src={image} alt={name} fill className='object-cover' />
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-sm dark:text-white'>{name}</p>
            <Rating data={sendingShape} />
          </div>
        </div>
        {children}
      </div>
      <Comment comment={comment} />
    </div>
  );
};

export default ReviewCard;
