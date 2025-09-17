import { adminLinks } from '@/assets/links';
import SidebarLinksLoadingIndicator from '@/components/ui/SidebarLinksLoadingIndicator';
import Link from 'next/link';

const AdminSidebar = () => {
  return (
    <div className='flex flex-col gap-2 lg:max-w-2/12'>
      {adminLinks.map((link) => {
        return (
          <Link href={link.href} key={link.href}>
            <SidebarLinksLoadingIndicator link={link} />
          </Link>
        );
      })}
    </div>
  );
};

export default AdminSidebar;
