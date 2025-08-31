'use client';
import { useState } from 'react';

const HeroCarousel = () => {
  const list = [0, 1, 2];
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
    <div className='relative hidden h-96 w-1/2 lg:flex'>
      <div className='flex h-96 w-full items-center justify-center bg-red-300'>
        {list.map((item) => {
          const goLeft = item < active;
          const goRight = item > active;
          return (
            <div key={item} className='flex items-center justify-center'>
              <div
                className={`absolute flex h-11/12 min-w-11/12 items-center justify-center bg-green-300 ${goRight && 'left-[110%]'} ${goLeft && '-left-[110%]'} ${!goLeft && !goRight && 'left-5'} transition-all duration-1000 ease-out`}
              >
                {item}
              </div>
            </div>
          );
        })}
        <button
          disabled={situation === 'first'}
          className={`absolute left-0 cursor-pointer disabled:opacity-40`}
          onClick={() => setActive(active - 1)}
        >
          prev
        </button>
        <button
          disabled={situation === 'last'}
          className={`cursor-pointe absolute right-0 disabled:opacity-40`}
          onClick={() => setActive(active + 1)}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;
