'use client';
import { adminLinks } from '@/assets/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AdminSidebar = () => {
  const pathName = usePathname();
  return (
    <div className='flex flex-col'>
      {adminLinks.map((link) => {
        const isActive = pathName === link.href;
        return (
          <Link href={link.href} key={link.href} className={`${isActive && 'bg-blue-600'}`}>
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default AdminSidebar;
