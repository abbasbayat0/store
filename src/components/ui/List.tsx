import { Product } from '@prisma/client';
import Link from 'next/link';
import FavoriteToggleButton from '../shared/products/FavoriteToggleButton';
import { formatCurrency } from '@/lib/utils/format';
import Image from 'next/image';

const List = ({ id, name, price, image, company }: Product) => {
  return (
    <Link
      href={`/products/${id}`}
      className={`dark:border-gra800'} flex flex-col items-start justify-center rounded-md border border-gray-300 p-5 shadow-md transition duration-300 hover:shadow-lg sm:flex-row sm:gap-5 md:gap-20 lg:gap-28 lg:rounded-xl`}
    >
      <div className='mx-auto flex h-72 w-11/12 overflow-hidden rounded-md sm:h-44 sm:max-w-44'>
        <Image
          width={180}
          height={180}
          unoptimized
          priority
          src={image}
          alt={name}
          className='min-w-full object-cover'
        />
      </div>
      <div className='sm:w-2/5'>
        <p className={`mt-5 text-xl font-medium capitalize sm:mt-0 dark:text-white`}>{name}</p>
        <p className={`mt-2 font-semibold opacity-60`}>{company}</p>
      </div>
      <div className='mt-3 flex w-full items-center justify-between sm:h-full sm:max-w-1/5 sm:flex-col sm:gap-22 md:w-1/6 lg:w-1/7'>
        <p className={`text-lg opacity-60 dark:text-white`}>{formatCurrency(price)}</p>
        <FavoriteToggleButton id={id} />
      </div>
    </Link>
  );
};

export default List;
