import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

const BreadCrumbs = ({ name }: { name: string }) => {
  return (
    <div className='flex w-10/12 items-center'>
      <Link
        href='/'
        className={`cursor-pointer text-xl opacity-60 transition duration-300 hover:opacity-100 dark:text-white`}
      >
        Home
      </Link>
      <IoIosArrowForward
        className={`mx-3 mt-1 text-xs opacity-60 transition duration-300 dark:text-white`}
      />
      <Link
        href='/products'
        className={`cursor-pointer text-xl opacity-60 transition duration-300 hover:opacity-100 dark:text-white`}
      >
        Products
      </Link>
      <IoIosArrowForward
        className={`mx-3 mt-1 text-xs opacity-60 transition duration-300 dark:text-white`}
      />
      <span className={`text-xl capitalize transition duration-300 dark:text-white`}>{name}</span>
    </div>
  );
};

export default BreadCrumbs;
