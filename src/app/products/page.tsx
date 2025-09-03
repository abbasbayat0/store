import ProductsContainer from '../../components/shared/products/ProductsContainer';
const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ layout?: string; search?: string }>;
}) => {
  const layout = (await searchParams).layout || 'grid';
  const search = (await searchParams).search || '';
  return (
    <div className='min-h-screen'>
      <ProductsContainer layout={layout} search={search} />
    </div>
  );
};

export default page;
