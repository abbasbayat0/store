'use client';
import { toggleFavoriteAction } from '@/lib/utils/actions';
import { usePathname } from 'next/navigation';
import { useActionState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { IoReloadCircleOutline } from 'react-icons/io5';

const FavoriteToggleForm = ({
  productId,
  favoriteId,
}: {
  productId: string;
  favoriteId: string | null;
}) => {
  const pathName = usePathname();
  const action = toggleFavoriteAction.bind(null, { productId, favoriteId, pathName });
  const [state, formAction, pending] = useActionState(action, { message: '' });
  const isFavorite = favoriteId ? true : false;
  return (
    <form action={formAction}>
      <button type='submit' className='cursor-pointer p-2'>
        {pending ? (
          <IoReloadCircleOutline className='animate-spin' />
        ) : isFavorite ? (
          <FaHeart />
        ) : (
          <FaRegHeart />
        )}
      </button>
    </form>
  );
};

export default FavoriteToggleForm;
