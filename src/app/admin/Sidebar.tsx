'use client';
import { adminLinks } from '@/assets/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AdminSidebar = () => {
  const pathName = usePathname();
  return (
    <div className='flex flex-col gap-2 lg:max-w-2/12'>
      {adminLinks.map((link) => {
        const isActive = pathName === link.href;
        return (
          <Link
            href={link.href}
            key={link.href}
            className={`min-w-36 rounded-md px-4 py-2 text-sm capitalize transition duration-300 ${isActive ? 'bg-blue-600 text-white opacity-100' : 'bg-gray-100 dark:bg-gray-900 dark:text-white opacity-80'}`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default AdminSidebar;
