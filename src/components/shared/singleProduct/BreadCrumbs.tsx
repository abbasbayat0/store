'use client';
import { RootState } from '@/lib/store/store';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import { useSelector } from 'react-redux';

const BreadCrumbs = ({ name }: { name: string }) => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  return (
    <div className='flex w-10/12 items-center'>
      <Link
        href='/'
        className={`cursor-pointer text-xl opacity-60 transition duration-300 hover:opacity-100 ${dark && 'text-white'} transition duration-300`}
      >
        Home
      </Link>
      <IoIosArrowForward
        className={`mx-3 mt-1 text-xs opacity-60 ${dark && 'text-white'} transition duration-300`}
      />
      <Link
        href='/products'
        className={`cursor-pointer text-xl opacity-60 transition duration-300 hover:opacity-100 ${dark && 'text-white'} transition duration-300`}
      >
        Products
      </Link>
      <IoIosArrowForward
        className={`mx-3 mt-1 text-xs opacity-60 ${dark && 'text-white'} transition duration-300`}
      />
      <span className={`text-xl capitalize ${dark && 'text-white'} transition duration-300`}>
        {name}
      </span>
    </div>
  );
};

export default BreadCrumbs;
