'use client';
import { adminLinks } from '@/assets/links';
import useTheme from '@/lib/hooks/useTheme';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AdminSidebar = () => {
  const pathName = usePathname();
  const dark = useTheme();
  return (
    <div className='flex flex-col gap-2 lg:max-w-2/12'>
      {adminLinks.map((link) => {
        const isActive = pathName === link.href;
        return (
          <Link
            href={link.href}
            key={link.href}
            className={`${isActive ? 'bg-blue-600 text-white' : dark ? 'bg-gray-900 text-white' : "bg-gray-100"} du3 min-w-36 rounded-md px-4 py-2 capitalize transition text-sm`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default AdminSidebar;
