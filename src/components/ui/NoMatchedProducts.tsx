'use client';

import { RootState } from '@/lib/store/store';
import { useSelector } from 'react-redux';
const NoMatchedProducts = () => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  return (
    <h1 className={`mt-10 text-center text-xl opacity-90 ${dark && 'text-white'}`}>
      there is no matched product !
    </h1>
  );
};

export default NoMatchedProducts;
