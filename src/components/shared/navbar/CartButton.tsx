'use client';
import { RootState } from '@/lib/store/store';
import { LuShoppingCart } from 'react-icons/lu';
import { useSelector } from 'react-redux';

const CartButton = () => {
  const dark = useSelector((state: RootState) => state.theme.dark);

  return (
    <div
      className={`relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border-[1px] border-gray-300 shadow-2xs shadow-gray-300 ${dark && 'border-gray-800 text-white shadow-none hover:bg-gray-800'} transition duration-300`}
    >
      <LuShoppingCart className='text-sm' />
      <span className='absolute -top-3 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-sm text-white'>
        0
      </span>
    </div>
  );
};

export default CartButton;
