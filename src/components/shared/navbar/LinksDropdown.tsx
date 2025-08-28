'use client';
import { useState } from 'react';
import UserIcon from './UserIcon';
import { TbMenu3 } from 'react-icons/tb';
import LinksDropDown from '@/components/ui/LinksDropDown';

const LinksDropdown = () => {
  const [dropOpen, setDropOpen] = useState(false);
  return (
    <div
      onClick={() => setDropOpen(!dropOpen)}
      className='relative flex h-8 w-24 cursor-pointer items-center justify-around rounded-md border-[1px] border-gray-300 shadow-2xs shadow-gray-300'
    >
      <TbMenu3 className='text-2xl' />
      <UserIcon />
      {dropOpen && <LinksDropDown setDropOpen={setDropOpen} />}
    </div>
  );
};

export default LinksDropdown;
