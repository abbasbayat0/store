import { Product } from '@prisma/client';
import Link from 'next/link';
import FavoriteToggleButton from '../shared/products/FavoriteToggleButton';
import { formatCurrency } from '@/lib/utils/format';
import LinkPendingIndicatorList from './LinkPendingIndicatorList';

const List = ({ id, name, price, image, company }: Product) => {
  return (
    <div className='relative'>
      <Link
        href={`/products/${id}`}
        className={`dark:border-gra800'} flex flex-col items-start justify-center rounded-md border border-gray-300 p-5 shadow-md transition duration-300 hover:shadow-lg sm:flex-row sm:gap-5 md:gap-20 lg:gap-28 lg:rounded-xl dark:border-gray-800`}
      >
        <LinkPendingIndicatorList name={name} image={image} company={company} />
        <div className='mt-3 flex w-full items-center justify-between sm:h-full sm:max-w-1/5 sm:flex-col sm:gap-22 md:w-1/6 lg:w-1/7'>
          <p className={`text-lg opacity-60 dark:text-white`}>{formatCurrency(price)}</p>
        </div>
      </Link>
      <div className='absolute bottom-5 right-12 sm:bottom-28 sm:right-9 md:right-10 lg:right-14 xl:right-16'>
        <FavoriteToggleButton id={id} />
      </div>
    </div>
  );
};

export default List;
