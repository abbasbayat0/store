import { getFeatured } from '@/lib/utils/actions';
import EmptyList from '../global/EmptyList';
import SectionTitle from '../global/SectionTitle';
import ProductsGrid from '../products/ProductsGrid';
import { Suspense } from 'react';
import LoadingContainer from '../global/LoadingContainer';

const FeaturedProducts = async () => {
  const { message, data } = await getFeatured();
  if (data.length === 0) {
    console.log(message);
    return <EmptyList text='There Is No Featured Products' className='mt-20' />;
  }
  return (
    <section className='pt-24'>
      <SectionTitle title='featured products' />
      <Suspense fallback={<LoadingContainer />}>
        <ProductsGrid data={data} />
      </Suspense>
    </section>
  );
};

export default FeaturedProducts;
