'use client';
import DarkModeDropdown from '@/components/ui/DarkModeDropdown';
import DarkModeIcons from '@/components/ui/DarkModeIcons';
import Link from 'next/link';
import { useState } from 'react';

const DarkMode = () => {
  const [dropOpen, setDropOpen] = useState(false);
  return (
    <Link
      href='/'
      className='relative flex h-8 w-8 items-center justify-center rounded-md border-[1px] border-gray-300 shadow-2xs shadow-gray-300'
    >
      <DarkModeIcons setDropOpen={setDropOpen} />
      {dropOpen && <DarkModeDropdown setDropOpen={setDropOpen} />}
    </Link>
  );
};

export default DarkMode;
