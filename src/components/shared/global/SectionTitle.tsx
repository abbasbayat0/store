'use client';

import { RootState } from '@/lib/store/store';
import { useSelector } from 'react-redux';

const SectionTitle = ({ title }: { title: string }) => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  return (
    <div className='mb-8 text-3xl font-medium tracking-wider capitalize'>
      <h2 className={`${dark && 'text-white'} transition duration-300`}>{title}</h2>
      <div className={`mt-10 border-b opacity-20 ${dark && 'border-gray-600'} transition duration-300`}></div>
    </div>
  );
};

export default SectionTitle;
