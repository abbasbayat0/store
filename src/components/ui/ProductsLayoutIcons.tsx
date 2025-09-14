import Link from 'next/link';
import { LuLayoutGrid, LuList } from 'react-icons/lu';

const ProductsLayoutIcons = ({ layout, searchTerms }: { layout: string; searchTerms: string }) => {
  return (
    <div className='flex gap-5'>
      <Link href={`/products?layout=grid${searchTerms}`}>
        <LuLayoutGrid
          className={`h-8 w-8 rounded-md p-2 ${layout === 'grid' ? 'bg-blue-600 text-white dark:text-black' : 'dark:text-white'} transition duration-300`}
        />
      </Link>
      <Link href={`/products?layout=list${searchTerms}`}>
        <LuList
          className={`h-8 w-8 rounded-md p-2 ${layout === 'list' ? 'bg-blue-600 text-white dark:text-black' : 'dark:text-white'} transition duration-300`}
        />
      </Link>
    </div>
  );
};

export default ProductsLayoutIcons;
