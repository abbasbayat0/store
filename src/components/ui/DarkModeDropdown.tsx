import { changeTheme } from '@/lib/features/themeSlice';
import { Dispatch, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';

const DarkModeDropdown = ({ setDropOpen }: { setDropOpen: Dispatch<SetStateAction<boolean>> }) => {
  const dispatch = useDispatch();
  return (
    <div
      onMouseLeave={() => {
        setTimeout(() => {
          setDropOpen(false);
        }, 1000);
      }}
      className={`absolute right-0 -bottom-[122px] flex w-28 flex-col items-start justify-around gap-2 rounded-md border-none bg-white px-2 py-2 shadow-md shadow-gray-300 dark:border dark:border-gray-800 dark:bg-gray-950 dark:shadow-gray-800`}
    >
      <p
        onClick={() => {
          dispatch(changeTheme(false));
          setDropOpen(false);
        }}
        className={`flex h-7 w-full items-center rounded-md px-2 tracking-wide opacity-80 transition select-none hover:bg-gray-100 dark:opacity-90 dark:hover:bg-gray-800`}
      >
        Light
      </p>
      <div className='-my-1 w-11/12 border-b border-gray-100 dark:border-gray-800'></div>
      <p
        onClick={() => {
          dispatch(changeTheme(true));
          setDropOpen(false);
        }}
        className={`flex h-7 w-full items-center rounded-md px-2 tracking-wide opacity-80 transition select-none hover:bg-gray-100 dark:opacity-90 dark:hover:bg-gray-800`}
      >
        Dark
      </p>
      <div className='-my-1 w-11/12 border-b border-gray-100 dark:border-gray-800'></div>

      <p
        onClick={() => {
          const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          dispatch(changeTheme(systemDark));
          setDropOpen(false);
        }}
        className={`flex h-7 w-full items-center rounded-md px-2 tracking-wide opacity-80 transition select-none hover:bg-gray-100 dark:opacity-90 dark:hover:bg-gray-800`}
      >
        System
      </p>
    </div>
  );
};

export default DarkModeDropdown;
