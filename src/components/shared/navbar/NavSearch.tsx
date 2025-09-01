'use client';
import { RootState } from '@/lib/store/store';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const NavSearch = () => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const { replace } = useRouter();
  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) params.set('search', value);
    else params.delete('search');
    setTimeout(() => {
      replace(`/products?${params.toString()}`);
    }, 300);
  };
  useEffect(() => {
    if (!searchParams.get('search')) setSearch('');
  }, [searchParams.get('search')]);
  return (
    <input
      type='search'
      onChange={(e) => {
        setSearch(e.target.value as string);
        handleChange(e.target.value);
      }}
      value={search}
      placeholder='Search Products ...'
      className={`w-full max-w-[320px] rounded-md p-2 px-3 text-sm font-medium outline-none focus:border-blue-600 ${dark ? 'border border-gray-800 bg-gray-800 text-white focus:border-blue-600' : 'border border-gray-300 shadow-2xs shadow-gray-300'} transition duration-300`}
    />
  );
};
export default NavSearch;
