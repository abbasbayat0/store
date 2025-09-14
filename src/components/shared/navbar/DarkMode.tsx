'use client';
import DarkModeDropdown from '@/components/ui/DarkModeDropdown';
import DarkModeIcons from '@/components/ui/DarkModeIcons';
import { useState } from 'react';

const DarkMode = () => {
  const [dropOpen, setDropOpen] = useState(false);
  return (
    <div
      onClick={() => setDropOpen(!dropOpen)}
      className={`relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border-[1px] border-gray-300 shadow-2xs shadow-gray-300 transition duration-300 dark:border-gray-800 dark:text-white dark:shadow-none dark:hover:bg-gray-800`}
    >
      <DarkModeIcons setDropOpen={setDropOpen} />
      {dropOpen && <DarkModeDropdown setDropOpen={setDropOpen} />}
    </div>
  );
};

export default DarkMode;
