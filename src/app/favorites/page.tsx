import EmptyList from '@/components/shared/global/EmptyList';
import LoadingContainer from '@/components/shared/global/LoadingContainer';
import SectionTitle from '@/components/shared/global/SectionTitle';
import Cart from '@/components/ui/Cart';
import { fetchFavorites } from '@/lib/utils/actions';
import { Suspense } from 'react';

const page = async () => {
  const favoriteProducts = await fetchFavorites();
  if (favoriteProducts?.length === 0)
    return (
      <Suspense fallback={<p className='dark:text-white'>loading ...</p>}>
        <EmptyList text='There Is No Favorite Item' />
      </Suspense>
    );
  return (
    <div>
      <SectionTitle title='Favorites' />
      <Suspense fallback={<LoadingContainer />}>
        <div className='mt-5 flex flex-wrap items-center justify-center gap-10'>
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
        </div>
      </Suspense>
    </div>
  );
};

export default page;
