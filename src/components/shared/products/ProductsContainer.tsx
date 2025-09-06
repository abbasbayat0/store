import ProductsLayoutIcons from '@/components/ui/ProductsLayoutIcons';
import { getAll } from '@/lib/utils/actions';
import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
import NoMatchedProducts from '@/components/ui/NoMatchedProducts';
import ProductsTitle from '@/components/ui/ProductsTitle';

const ProductsContainer = async ({ layout, search }: { layout: string; search: string }) => {
  const searchTerms = search ? `&${search}` : '';
  const { message, data } = await getAll(search);
  const productsLength = data.length;
  const title = productsLength === 1 ? `${productsLength} product` : `${productsLength} products`;
  return (
    <>
      <div className='flex flex-col gap-5'>
        <div className='flex items-center justify-between'>
          <ProductsTitle title={title} />
          <ProductsLayoutIcons layout={layout} searchTerms={searchTerms} />
        </div>
        <div className='w-full border-b border-gray-300'></div>
      </div>
      <div>
        {productsLength === 0 ? (
          <NoMatchedProducts message={message} />
        ) : layout === 'grid' ? (
          <ProductsGrid data={data} />
        ) : (
          <ProductsList data={data} />
        )}
      </div>
    </>
  );
};

export default ProductsContainer;
