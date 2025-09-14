'use client';
/* eslint-disable react-hooks/exhaustive-deps */
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const NavSearch = () => {
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
      className={`w-full max-w-[320px] rounded-md border border-gray-300 p-2 px-3 text-sm font-medium shadow-2xs shadow-gray-300 transition duration-300 outline-none focus:border-blue-600 dark:border dark:border-gray-800 dark:bg-gray-800 dark:text-white dark:shadow-none dark:focus:border-blue-600`}
      suppressHydrationWarning={true}
    />
  );
};
export default NavSearch;
