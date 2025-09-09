'use client';
import { initializeTheme } from '@/lib/features/themeSlice';
import { RootState } from '@/lib/store/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ThemeProviderDiv = ({ children }: { children: React.ReactNode }) => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeTheme());
  }, [dispatch]);
  return (
    <div className={dark ? 'bg-gray-950 transition duration-300' : 'transition duration-300'}>
      {children}
    </div>
  );
};

export default ThemeProviderDiv;
