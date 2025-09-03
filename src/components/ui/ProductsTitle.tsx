'use client';
import { RootState } from '@/lib/store/store';
import { useSelector } from 'react-redux';

const ProductsTitle = ({ title }: { title: string }) => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  return <p className={`text-lg font-semibold ${dark && 'text-white'}`}>{title}</p>;
};

export default ProductsTitle;
