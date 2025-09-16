'use client';
import Image from 'next/image';
import { useLinkStatus } from 'next/link';

const LinkPendingIndicatorList = ({
  image,
  name,
  company,
}: {
  image: string;
  name: string;
  company: string;
}) => {
  const { pending } = useLinkStatus();
  return (
    <>
      <div
        className={`mx-auto flex h-72 w-11/12 overflow-hidden rounded-md sm:h-44 sm:max-w-44 ${pending ? 'animate-pulse' : 'animate-none'}`}
      >
        <Image
          width={180}
          height={180}
          unoptimized
          priority
          src={image}
          alt={name}
          className={`min-w-full object-cover ${pending ? 'animate-pulse' : 'animate-none'}`}
        />
      </div>
      <div className={`sm:w-2/5 ${pending ? 'animate-pulse' : 'animate-none'}`}>
        <p className={`mt-5 text-xl font-medium capitalize sm:mt-0 dark:text-white`}>{name}</p>
        <p className={`mt-2 font-semibold opacity-60 dark:text-white`}>{company}</p>
      </div>
    </>
  );
};

export default LinkPendingIndicatorList;
