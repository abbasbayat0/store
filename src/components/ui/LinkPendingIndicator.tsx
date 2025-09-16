'use client';
import { formatCurrency } from '@/lib/utils/format';
import { useLinkStatus } from 'next/link';
import Image from 'next/image';

const LinkPendingIndicator = ({
  name,
  image,
  price,
}: {
  name: string;
  image: string;
  price: number;
}) => {
  const { pending } = useLinkStatus();
  return (
    <div
      className={`group flex w-66 flex-col items-center justify-center rounded-md border border-gray-300 p-5 shadow-md transition duration-300 hover:shadow-lg lg:w-72 lg:rounded-xl xl:w-[370px] dark:border-gray-800 ${pending ? 'animate-pulse' : 'animate-none'}`}
    >
      <div className='mx-auto flex h-52 w-full overflow-hidden rounded-md'>
        <Image
          src={image}
          alt={name}
          width={350}
          height={210}
          priority
          unoptimized
          className='w-56 object-cover transition duration-300 group-hover:scale-110 lg:w-66 xl:w-[350px]'
        />
      </div>
      <p className={`mt-5 text-lg font-medium capitalize dark:text-white`}>{name}</p>
      <p className={`mt-3 text-lg opacity-60 dark:text-white`}>{formatCurrency(price)}</p>
    </div>
  );
};

export default LinkPendingIndicator;
