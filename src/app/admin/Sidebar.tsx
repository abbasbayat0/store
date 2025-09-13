import { adminLinks } from '@/assets/links';
import Link from 'next/link';

const AdminSidebar = () => {
  return (
    <div className='flex flex-col'>
      {adminLinks.map((link) => {
        return (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default AdminSidebar;
