'use client';
import { links } from '@/assets/links';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';

const DarkModeDropdown = ({ setDropOpen }: { setDropOpen: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <div className='absolute top-9 left-0 flex w-36 flex-col items-start justify-around gap-1 rounded-md bg-white px-2 py-2 shadow-md shadow-gray-300 sm:w-28 lg:w-32 xl:w-36'>
      {links.map((link) => {
        return (
          <div key={link.label} className='w-full border-b border-gray-100'>
            <Link
              href={link.href}
              onClick={() => {
                setDropOpen(false);
              }}
              className='flex h-7 w-full items-center rounded-md px-2 tracking-wide opacity-80 transition hover:bg-gray-100'
            >
              {link.label}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default DarkModeDropdown;
