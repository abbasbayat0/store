'use client';
import { RootState } from '@/lib/store/store';
import { FiShare2 } from 'react-icons/fi';
import { useSelector } from 'react-redux';

const SingleProductShareButton = () => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  return (
    <div
      className={`z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md p-1 transition duration-300 ${dark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-black hover:bg-gray-200'}`}
    >
      <FiShare2 className='text-lg' />
    </div>
  );
};

export default SingleProductShareButton;
