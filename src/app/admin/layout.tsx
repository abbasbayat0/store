import React from 'react';
import AdminSidebar from './Sidebar';
import SectionTitle from '@/components/shared/global/SectionTitle';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full'>
      <SectionTitle title='Dashboard' />
      <div className='mt-12 flex w-full flex-col items-center justify-between sm:flex-row'>
        <AdminSidebar />
        <div className='mt-10 sm:mt-0 lg:w-10/12'>{children}</div>
      </div>
    </div>
  );
};

export default layout;
