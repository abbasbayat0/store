'use client';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store/store';

const CartSkeleton = () => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  return (
    <div className='relative'>
      <div
        className={`group flex w-66 flex-col items-center justify-center rounded-md border border-gray-300 p-5 shadow-md transition duration-300 hover:shadow-lg lg:w-72 lg:rounded-xl xl:w-[370px] ${dark && 'border-gray-800'}`}
      >
        <div className='mx-auto flex h-52 w-full overflow-hidden rounded-md'>
          <div className='h-66 w-56 bg-gray-200 object-cover transition duration-300 group-hover:scale-110 lg:w-66 xl:w-[350px]'></div>
        </div>
        <p
          className={`mx-auto mt-5 h-7 w-1/2 bg-gray-200 text-lg font-medium capitalize ${dark && 'text-white'}`}
        ></p>
        <p
          className={`mx-auto mt-3 h-6 w-1/3 bg-gray-200 text-lg opacity-60 ${dark && 'text-white'}`}
        ></p>
      </div>
    </div>
  );
};

export default CartSkeleton;
