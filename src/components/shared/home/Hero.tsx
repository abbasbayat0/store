'use client';
import HeroCarousel from './HeroCarousel';
import Link from 'next/link';
import useTheme from '@/lib/hooks/useTheme';

const Hero = () => {
  const dark = useTheme();
  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-col items-start justify-center lg:w-5/12'>
        <h1
          className={`text-4xl font-bold sm:text-6xl ${dark && 'text-white'} transition duration-300`}
        >
          We are changing the way people shop
        </h1>
        <p className={`text-xl opacity-60 ${dark && 'text-white'} mt-10 transition duration-300`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque et voluptas saepe in quae
          voluptate, laborum maiores possimus illum reprehenderit aut delectus veniam cum
          perferendis unde sint doloremque non nam.
        </p>
        <Link href='/products' className='cursor-pointer'>
          <button
            className={`mt-10 ${dark && 'text-black'} cursor-pointer rounded-md bg-blue-600 px-8 py-3 text-xs font-medium text-white opacity-90 transition duration-300`}
          >
            OUR PRODUCTS
          </button>
        </Link>
      </div>
      <HeroCarousel />
    </div>
  );
};

export default Hero;
