'use client';
import { toggleFavoriteAction } from '@/lib/utils/actions';
import { usePathname } from 'next/navigation';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { IoReloadCircleOutline } from 'react-icons/io5';
import FormContainer from '../form/FormContainer';
import { useFormStatus } from 'react-dom';

const FavoriteToggleForm = ({
  productId,
  favoriteId,
}: {
  productId: string;
  favoriteId: string | null;
}) => {
  const pathName = usePathname();
  const { pending } = useFormStatus();
  const action = toggleFavoriteAction.bind(null, { productId, favoriteId, pathName });
  const isFavorite = favoriteId ? true : false;
  return (
    <FormContainer action={action}>
      <button type='submit' className='cursor-pointer p-2'>
        {pending ? (
          <IoReloadCircleOutline className='animate-spin' />
        ) : isFavorite ? (
          <FaHeart />
        ) : (
          <FaRegHeart />
        )}
      </button>
    </FormContainer>
  );
};

export default FavoriteToggleForm;
