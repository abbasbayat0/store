import { getFeatured } from '@/lib/utils/actions';
import EmptyList from '../global/EmptyList';
import SectionTitle from '../global/SectionTitle';
import ProductsGrid from '../products/ProductsGrid';

const FeaturedProducts = async () => {
  const featuredProducts = await getFeatured();
  if (featuredProducts.length === 0) return <EmptyList />;
  return (
    <section className='pt-24'>
      <SectionTitle title='featured products' />
      <ProductsGrid products={featuredProducts} />
    </section>
  );
};

export default FeaturedProducts;
