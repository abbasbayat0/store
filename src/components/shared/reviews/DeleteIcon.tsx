'use client';
import { deleteReviewAction } from '@/lib/utils/actions';
import { useActionState } from 'react';
import { GrRefresh } from 'react-icons/gr';
import { LuTrash2 } from 'react-icons/lu';

const DeleteIcon = ({ reviewId }: { reviewId: string }) => {
  const action = deleteReviewAction.bind(null, { reviewId });
  const [, formAction, pending] = useActionState(action, { message: '' });
  return (
    <form action={formAction}>
      {pending ? (
        <GrRefresh className='animate-spin cursor-not-allowed dark:text-white' />
      ) : (
        <button>
          <LuTrash2 className='cursor-pointer hover:text-red-400 dark:text-white transition duration-300 opacity-80' />
        </button>
      )}
    </form>
  );
};
export default DeleteIcon;
