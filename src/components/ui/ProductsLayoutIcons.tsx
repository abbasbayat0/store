'use client';
import { RootState } from '@/lib/store/store';
import Link from 'next/link';
import { LuLayoutGrid, LuList } from 'react-icons/lu';
import { useSelector } from 'react-redux';

const ProductsLayoutIcons = ({ layout, searchTerms }: { layout: string; searchTerms: string }) => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  return (
    <div className='flex gap-5'>
      <Link href={`/products?layout=grid${searchTerms}`}>
        <LuLayoutGrid
          className={`h-8 w-8 rounded-md p-2 ${layout === 'grid' ? `bg-blue-600 ${dark ? 'text-black' : 'text-white'}` : `${dark && 'text-white'}`}`}
        />
      </Link>
      <Link href={`/products?layout=list${searchTerms}`}>
        <LuList
          className={`h-8 w-8 rounded-md p-2 ${layout === 'list' ? `bg-blue-600 ${dark ? 'text-black' : 'text-white'}` : `${dark && 'text-white'}`}`}
        />
      </Link>
    </div>
  );
};

export default ProductsLayoutIcons;
