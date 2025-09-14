'use client';
import { useState } from 'react';
import { GrFormPreviousLink } from 'react-icons/gr';
import { GrFormNextLink } from 'react-icons/gr';
import one from '@/assets/images/1.webp';
import two from '@/assets/images/2.webp';
import three from '@/assets/images/3.webp';
import Image from 'next/image';

const HeroCarousel = () => {
  const list = [
    { src: one, index: 0 },
    { src: two, index: 1 },
    { src: three, index: 2 },
  ];
  const [active, setActive] = useState(0);
  const situation = active === 0 ? 'first' : active === list.length - 1 ? 'last' : '';
  // const handlePrev = () => {
  //   const newActive = (active - 1 + list.length) % list.length;
  //   setActive(newActive);
  // };
  // const handleNext = () => {
  //   const newActive = (active + 1) % list.length;
  //   setActive(newActive);
  // };
  return (
    <div className='relative hidden h-[450px] w-[650px] flex-col items-center justify-center overflow-hidden lg:flex'>
      <div className='flex h-96 w-full items-center justify-center'>
        {list.map((item) => {
          const goLeft = item.index < active;
          const goRight = item.index > active;
          return (
            <div
              key={item.index}
              className={`absolute flex h-11/12 w-11/12 items-center justify-center rounded-md border border-gray-300 lg:rounded-xl ${goRight && 'left-[130%]'} ${goLeft && '-left-[130%]'} ${!goLeft && !goRight && 'left-7'} transition-all duration-900 ease-out dark:border-gray-700`}
            >
              <Image
                width={450}
                height={650}
                src={item.src.src}
                alt={item.src.src}
                className='h-[97%] w-[98%] rounded-md object-cover lg:rounded-lg'
              />
            </div>
          );
        })}
      </div>
      <div className='absolute flex w-full items-center justify-between'>
        <button
          disabled={situation === 'first'}
          className={`cursor-pointer rounded-full border border-gray-300 bg-[#e5e7eb88] p-1 text-xl transition duration-300 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300`}
          onClick={() => setActive(active - 1)}
        >
          <GrFormPreviousLink />
        </button>
        <button
          disabled={situation === 'last'}
          className={`cursor-pointer rounded-full border border-gray-300 bg-[#e5e7eb88] p-1 text-xl transition duration-300 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300`}
          onClick={() => setActive(active + 1)}
        >
          <GrFormNextLink />
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;
