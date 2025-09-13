'use client';
import { useState } from 'react';
import { TbMenu3 } from 'react-icons/tb';
import LinksDropDown from '@/components/ui/LinksDropDown';
import useTheme from '@/lib/hooks/useTheme';
import UserIcon from './userIcon';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import { links } from '@/assets/links';
import SignedOutLinks from '@/components/ui/SignedOutLinks';

const LinksDropdown = () => {
  const [dropOpen, setDropOpen] = useState(false);
  const dark = useTheme();
  return (
    <div
      onClick={() => setDropOpen(!dropOpen)}
      className={`relative z-20 flex h-8 w-24 cursor-pointer items-center justify-around rounded-md border-[1px] border-gray-300 shadow-2xs shadow-gray-300 ${dark && 'border-gray-800 text-white shadow-none hover:bg-gray-800'} transition duration-300`}
    >
      <TbMenu3 className='text-2xl' />
      <UserIcon />
      <SignedIn>{dropOpen && <LinksDropDown setDropOpen={setDropOpen} links={links} />}</SignedIn>
      <SignedOut>{dropOpen && <SignedOutLinks setDropOpen={setDropOpen} />}</SignedOut>
    </div>
  );
};

export default LinksDropdown;
