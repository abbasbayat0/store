'use client';
import { RootState } from '@/lib/store/store';
import { useSelector } from 'react-redux';

const page = () => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  return (
    <div className='min-h-screen'>
      <div className='mt-auto flex flex-col items-center justify-center min-[380px]:flex-row min-[380px]:gap-2 lg:gap-5'>
        <p
          className={`text-4xl font-bold sm:text-6xl ${dark && 'text-white'} transition duration-300`}
        >
          We Love
        </p>
        <p className='mt-2 rounded-md bg-blue-600 px-5 pb-2 text-4xl font-bold tracking-widest text-white sm:text-6xl lg:rounded-lg lg:pb-3'>
          store
        </p>
      </div>
      <div className='mt-6'>
        <p
          className={`mx-auto max-w-2xl text-xl opacity-60 ${dark && 'text-white'} transition duration-300`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero hic distinctio ducimus
          temporibus nobis autem laboriosam repellat, magni fugiat minima excepturi neque, tenetur
          possimus nihil atque! Culpa nulla labore nam?
        </p>
      </div>
    </div>
  );
};

export default page;
