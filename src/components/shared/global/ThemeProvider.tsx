'use client';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store/store';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  return <div className={`${dark && 'bg-gray-700'}`}>{children}</div>;
};

export default ThemeProvider;
