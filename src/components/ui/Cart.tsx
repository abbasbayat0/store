'use client';
import { Product } from '@prisma/client';
import FavoriteToggleButton from '../shared/products/FavoriteToggleButton';
import { formatCurrency } from '@/lib/utils/format';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store/store';
import Link from 'next/link';

const Cart = ({ id, name, image, price }: Product) => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  return (
    <div className='relative'>
      <Link
        href={`/products/${id}`}
        className={`group flex w-66 flex-col items-center justify-center rounded-md border border-gray-300 p-5 shadow-md transition duration-300 hover:shadow-lg lg:w-72 lg:rounded-xl xl:w-[370px] ${dark && 'border-gray-800'}`}
      >
        <div className='mx-auto flex h-52 w-full overflow-hidden rounded-md'>
          <img
            src={image}
            alt={name}
            className='w-56 object-cover transition duration-300 group-hover:scale-110 lg:w-66 xl:w-[350px]'
          />
        </div>
        <p className={`mt-5 text-lg font-medium capitalize ${dark && 'text-white'}`}>{name}</p>
        <p className={`mt-3 text-lg opacity-60 ${dark && 'text-white'}`}>{formatCurrency(price)}</p>
      </Link>
      <div className='absolute top-7 right-7'>
        <FavoriteToggleButton id={id} />
      </div>
    </div>
  );
};

export default Cart;
