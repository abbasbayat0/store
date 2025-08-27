'use client';
import { changeTheme } from '@/lib/features/themeSlice';
import { Dispatch, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';

const DarkModeDropdown = ({ setDropOpen }: { setDropOpen: Dispatch<SetStateAction<boolean>> }) => {
  const dispatch = useDispatch();
  return (
    <div className='absolute right-0 -bottom-[80px] flex w-24 flex-col items-start justify-around rounded-md bg-white px-2 py-2 shadow-md shadow-gray-300'>
      <p
        onClick={() => {
          dispatch(changeTheme(false));
          setDropOpen(false);
        }}
        className='flex h-7 w-full items-center rounded-md px-2 tracking-wide opacity-80 transition hover:bg-gray-100'
      >
        Light
      </p>
      <p
        onClick={() => {
          dispatch(changeTheme(true));
          setDropOpen(false);
        }}
        className='flex h-7 w-full items-center rounded-md px-2 tracking-wide opacity-80 transition hover:bg-gray-100'
      >
        Dark
      </p>
    </div>
  );
};

export default DarkModeDropdown;
