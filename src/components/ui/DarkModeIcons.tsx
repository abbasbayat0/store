'use client';
import { Dispatch, SetStateAction } from 'react';
import { RootState } from '@/lib/store/store';
import { useSelector } from 'react-redux';
import { IoSunnyOutline } from 'react-icons/io5';
import { IoIosMoon } from 'react-icons/io';

const DarkModeIcons = ({ setDropOpen }: { setDropOpen: Dispatch<SetStateAction<boolean>> }) => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  if (!dark) return <IoSunnyOutline onClick={() => setDropOpen(true)} className='text-xl' />;
  return <IoIosMoon onClick={() => setDropOpen(true)} className='text-xl' />;
};

export default DarkModeIcons;
