'use client';
import { adminLinks } from '@/assets/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AdminSidebar = () => {
  const pathName = usePathname();
  return (
    <div className='flex max-w-2/12 flex-col gap-2'>
      {adminLinks.map((link) => {
        const isActive = pathName === link.href;
        return (
          <Link
            href={link.href}
            key={link.href}
            className={`${isActive ? 'bg-blue-600 text-white' : 'bg-gray-100'} du3 min-w-36 rounded-md px-3 py-1 capitalize transition`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default AdminSidebar;
