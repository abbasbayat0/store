import { fetchFavorites } from '@/lib/utils/actions';

const page = async () => {
  const favoriteProducts = await fetchFavorites();
  return <p className='dark:text-white'>you have {favoriteProducts?.length} items</p>;
};

export default page;
