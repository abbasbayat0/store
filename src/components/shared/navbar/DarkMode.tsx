'use client';
import DarkModeDropdown from '@/components/ui/DarkModeDropdown';
import DarkModeIcons from '@/components/ui/DarkModeIcons';
import { RootState } from '@/lib/store/store';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const DarkMode = () => {
  const [dropOpen, setDropOpen] = useState(false);
  const dark = useSelector((state: RootState) => state.theme.dark);
  return (
    <div
      onClick={() => setDropOpen(!dropOpen)}
      className={`relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border-[1px] border-gray-300 shadow-2xs shadow-gray-300 ${dark&&"text-white shadow-none border-gray-800 hover:bg-gray-800"} transition duration-300`}
    >
      <DarkModeIcons setDropOpen={setDropOpen} />
      {dropOpen && <DarkModeDropdown setDropOpen={setDropOpen} />}
    </div>
  );
};

export default DarkMode;
