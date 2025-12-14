import { formatCurrency } from '@/lib/utils/format';
import Image from 'next/image';
import Link from 'next/link';
export const FirstColumn = ({ name, image }: { image: string; name: string }) => {
  return (
    <div className='relative min-w-32 h-20 min-[400px]:h-44 md:w-44 lg:w-32 lg:h-32'>
      <Image
        src={image}
        alt={name}
        fill
        priority
        className='w-full rounded-md object-cover'
      />
    </div>
  );
};
export const SecondColumn = ({
  name,
  company,
  productId,
}: {
  name: string;
  company: string;
  productId: string;
}) => {
  return (
    <div className='sm:w-48'>
      <Link href={`/products/${productId}`}>
        <h3 className='font-bold capitalize transition duration-300 hover:underline dark:text-white'>
          {name}
        </h3>
      </Link>
      <h4 className='mt-2 text-xs capitalize transition duration-300 dark:text-white'>{company}</h4>
    </div>
  );
};

export const FourthColumn = ({ price }: { price: number }) => {
  return (
    <p className='font-bold transition duration-300 md:ml-auto dark:text-white'>
      {formatCurrency(price)}
    </p>
  );
};
