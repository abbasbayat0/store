import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import type { NavLink } from '@/assets/links';
import { SignOutButton, useUser } from '@clerk/nextjs';

const DarkModeDropdown = ({
  setDropOpen,
  links,
}: {
  setDropOpen: Dispatch<SetStateAction<boolean>>;
  links: NavLink[];
}) => {
  const id = useUser().user?.id;
  return (
    <div
      className={`absolute top-9 left-0 flex w-36 flex-col items-start justify-around gap-1 rounded-md border-none bg-white px-2 py-2 shadow-md shadow-gray-300 transition duration-300 sm:w-28 lg:w-32 xl:w-36 dark:border dark:border-gray-800 dark:bg-gray-950 dark:shadow-gray-900`}
    >
      {links.map((link) => {
        if (id !== process.env.NEXT_PUBLIC_ADMIN_ID && link.label === 'dashboard') return null;
        return (
          <div
            key={link.label}
            className={`w-full border-b border-gray-100 transition duration-300 dark:border-gray-800`}
          >
            <Link
              href={link.href}
              onClick={() => {
                setDropOpen(false);
              }}
              className={`flex h-7 w-full items-center rounded-md px-2 tracking-wide capitalize opacity-80 transition duration-300 hover:bg-gray-100 dark:hover:bg-gray-800`}
            >
              {link.label}
            </Link>
          </div>
        );
      })}
      <SignOutButton>
        <Link href='/' className='mx-2 my-2 text-sm font-bold opacity-70'>
          Sign Out
        </Link>
      </SignOutButton>
    </div>
  );
};

export default DarkModeDropdown;
