import { getFeatured } from '@/lib/utils/actions';
import EmptyList from '../global/EmptyList';
import SectionTitle from '../global/SectionTitle';
import ProductsGrid from '../products/ProductsGrid';
import { Suspense } from 'react';
import LoadingContainer from '../global/LoadingContainer';

const FeaturedProducts = async () => {
  const featuredProducts = await getFeatured();
  if (featuredProducts.length === 0) return <EmptyList />;
  return (
    <section className='pt-24'>
      <SectionTitle title='featured products' />
      <Suspense fallback={<LoadingContainer />}>
        <ProductsGrid products={featuredProducts} />
      </Suspense>
    </section>
  );
};

export default FeaturedProducts;
