'use client';
import { initializeTheme } from '@/lib/features/themeSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const ThemeProviderDiv = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeTheme());
  }, [dispatch]);
  return <div className='dark:bg-gray-950 transition duration-300'>{children}</div>;
};

export default ThemeProviderDiv;
