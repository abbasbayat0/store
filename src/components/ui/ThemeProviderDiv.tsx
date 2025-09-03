'use client';
import { RootState } from '@/lib/store/store';
import { useSelector } from 'react-redux';

const ThemeProviderDiv = ({ children }: { children: React.ReactNode }) => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  return <div className={`transition duration-300 ${dark && 'bg-gray-950'}`}>{children}</div>;
};

export default ThemeProviderDiv;
