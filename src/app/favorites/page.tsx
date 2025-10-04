import LoadingContainer from '@/components/shared/global/LoadingContainer';
import SectionTitle from '@/components/shared/global/SectionTitle';
import Cart from '@/components/ui/Cart';
import { fetchFavorites } from '@/lib/utils/actions';
import { Suspense } from 'react';

const page = async () => {
  const favoriteProducts = await fetchFavorites();
  return (
    <div>
      <SectionTitle title='Favorites' />
      <Suspense fallback={<LoadingContainer />}>
        {favoriteProducts?.map((product) => {
          return (
            <div
              key={product.id}
              className='mt-5 flex flex-wrap items-center justify-center gap-10'
            >
              <Cart {...product.product} />
            </div>
          );
        })}
      </Suspense>
    </div>
  );
};

export default page;
