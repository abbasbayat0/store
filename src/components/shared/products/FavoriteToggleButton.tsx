'use client';
import useTheme from '@/lib/hooks/useTheme';
import { CiHeart } from 'react-icons/ci';

const FavoriteToggleButton = ({ id }: { id: string }) => {
  console.log(id);
  const dark = useTheme();
  return (
    <div
      className={`z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md p-1 transition duration-300 ${dark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-black hover:bg-gray-200'}`}
    >
      <CiHeart className='text-3xl' />
    </div>
  );
};

export default FavoriteToggleButton;
