'use client';
import { RootState } from '@/lib/store/store';
import { CiHeart } from 'react-icons/ci';
import { useSelector } from 'react-redux';

const FavoriteToggleButton = ({ id }: { id: string }) => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  return (
    <div
      className={`z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md p-1 transition duration-300 ${dark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-black hover:bg-gray-200'}`}
    >
      <CiHeart className='text-3xl' />
    </div>
  );
};

export default FavoriteToggleButton;
