'use client';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import SignOut from '../shared/navbar/SignOut';
import type { NavLink } from '@/assets/links';
import useTheme from '@/lib/hooks/useTheme';

const DarkModeDropdown = ({
  setDropOpen,
  links,
}: {
  setDropOpen: Dispatch<SetStateAction<boolean>>;
  links: NavLink[];
}) => {
  const dark = useTheme();
  return (
    <div
      className={`absolute top-9 left-0 flex w-36 flex-col items-start justify-around gap-1 rounded-md px-2 py-2 sm:w-28 lg:w-32 xl:w-36 ${dark ? 'border border-gray-800 bg-gray-950' : 'border-none bg-white shadow-md shadow-gray-300'} transition duration-300`}
    >
      {links.map((link) => {
        return (
          <div
            key={link.label}
            className={`w-full border-b ${dark ? 'border-gray-800' : 'border-gray-100'} transition duration-300`}
          >
            <Link
              href={link.href}
              onClick={() => {
                setDropOpen(false);
              }}
              className={`flex h-7 w-full items-center rounded-md px-2 tracking-wide opacity-80 transition ${dark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition duration-300`}
            >
              {link.label}
            </Link>
          </div>
        );
      })}
      <SignOut />
    </div>
  );
};

export default DarkModeDropdown;
