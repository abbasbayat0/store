'use client';
import { changeTheme } from '@/lib/features/themeSlice';
import { RootState } from '@/lib/store/store';
import { Dispatch, SetStateAction } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DarkModeDropdown = ({ setDropOpen }: { setDropOpen: Dispatch<SetStateAction<boolean>> }) => {
  const dispatch = useDispatch();
  const dark = useSelector((state: RootState) => state.theme.dark);
  console.log(dark);
  return (
    <div
      className={`absolute right-0 -bottom-[80px] flex w-28 flex-col items-start justify-around gap-2 rounded-md px-2 py-2 ${dark ? 'border border-gray-800 bg-gray-950' : 'border-none bg-white shadow-md shadow-gray-300'}`}
    >
      <p
        onClick={() => {
          dispatch(changeTheme(false));
          setDropOpen(false);
        }}
        className={`flex h-7 w-full items-center rounded-md px-2 tracking-wide transition select-none ${dark ? 'opacity-90 hover:bg-gray-800' : 'opacity-80 hover:bg-gray-100'}`}
      >
        Light
      </p>
      <p
        onClick={() => {
          dispatch(changeTheme(true));
          setDropOpen(false);
        }}
        className={`flex h-7 w-full items-center rounded-md px-2 tracking-wide transition select-none ${dark ? 'opacity-90 hover:bg-gray-800' : 'opacity-80 hover:bg-gray-100'}`}
      >
        Dark
      </p>
    </div>
  );
};

export default DarkModeDropdown;
