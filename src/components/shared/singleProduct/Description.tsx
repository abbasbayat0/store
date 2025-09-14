import { Product } from '@prisma/client';
import FavoriteToggleButton from '../products/FavoriteToggleButton';
import SingleProductShareButton from '@/components/ui/SingleProductShareButton';
import { formatCurrency } from '@/lib/utils/format';

const Description = ({ id, name, company, price, description }: Product) => {
  return (
    <div>
      <div className='mt-16 flex items-center gap-5 min-[480px]:w-[400px] lg:mt-5 lg:min-w-full lg:gap-10'>
        <p
          className={`max-w-1/2 text-3xl font-bold capitalize transition duration-300 dark:text-white`}
        >
          {name}
        </p>
        <div className='flex gap-2'>
          <FavoriteToggleButton id={id} />
          <SingleProductShareButton />
        </div>
      </div>
      <p className={`mt-2 transition duration-300 dark:text-white`}>rating</p>
      <p className={`font- mt-5 text-xl capitalize transition duration-300 dark:text-white`}>
        {company}
      </p>
      <p
        className={`dark:bg-gray-80text-white'} mt-3 w-22 rounded-md bg-gray-100 py-1 text-center text-lg transition duration-300`}
      >
        {formatCurrency(price)}
      </p>
      <p className={`mt-8 font-medium opacity-50 transition duration-300 dark:text-white`}>
        {description}
      </p>
    </div>
  );
};

export default Description;
