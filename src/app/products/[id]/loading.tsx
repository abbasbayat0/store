'use client';
import { RootState } from '@/lib/store/store';
import { useSelector } from 'react-redux';
const loading = () => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  return <p className={`${dark && 'text-white'} min-h-screen`}>loading...</p>;
};

export default loading;
