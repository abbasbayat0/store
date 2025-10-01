'use client';
import { useFormStatus } from 'react-dom';
import { IoReloadCircleOutline } from 'react-icons/io5';

const FavoriteToggleForm = () => {
  const { pending } = useFormStatus();
  return (
    <form>
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
