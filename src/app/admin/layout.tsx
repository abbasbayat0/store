import React from 'react';
import AdminSidebar from './Sidebar';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full'>
      <h1>Dashboard</h1>
      <div className='mt-2 w-full border-b border-gray-300'></div>
      <div className='mt-10 flex w-full justify-between'>
        <AdminSidebar />
        {children}
      </div>
    </div>
  );
};

export default layout;
