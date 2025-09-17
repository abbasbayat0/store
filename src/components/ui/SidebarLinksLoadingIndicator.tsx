'use client';
import { NavLink } from '@/assets/links';
import { useLinkStatus } from 'next/link';
import { usePathname } from 'next/navigation';

const SidebarLinksLoadingIndicator = ({ link }: { link: NavLink }) => {
  const pathName = usePathname();
  const isActive = pathName === link.href;
  const { pending } = useLinkStatus();

  return (
    <div
      className={`min-w-36 rounded-md px-4 py-2 text-sm capitalize transition duration-300 ${isActive ? 'bg-blue-600 text-white opacity-100' : 'bg-gray-100 opacity-80 dark:bg-gray-900 dark:text-white'} ${pending && 'animate-pulse cursor-not-allowed'}`}
    >
      {link.label}
    </div>
  );
};

export default SidebarLinksLoadingIndicator;
