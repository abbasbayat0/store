'use client';

import { addToCart } from '@/lib/utils/actions';
import { useActionState } from 'react';
import { GrRefresh } from 'react-icons/gr';

const AddToCartInput = ({ id }: { id: string }) => {
  const [state, formAction, pending] = useActionState(addToCart, { message: '' });
  console.log(state.message);
  return (
    <form className='flex flex-col gap-2' action={formAction}>
      <input type='hidden' name='id' value={id} />
      <label htmlFor='amount'>Amount:</label>
      <input
        type='number'
        name='amount'
        id='amount'
        defaultValue={1}
        min={1}
        max={10}
        className={`mt-1 w-20 rounded-md border border-gray-300 px-2 py-1 opacity-50 transition duration-300 focus:opacity-100 focus:shadow-sm focus:outline-none dark:border-gray-800 dark:text-white`}
      />
      <button
        type='submit'
        disabled={pending}
        className={`mt-10 flex w-32 cursor-pointer items-center justify-center gap-1 rounded-lg bg-blue-600 px-3 py-2 text-white disabled:cursor-not-allowed ${pending ? 'opacity-70' : 'opacity-100'}`}
      >
        {pending ? (
          <div className='flex items-center justify-center gap-1'>
            <GrRefresh className='animate-spin' />
            <p>Creating...</p>
          </div>
        ) : (
          <p>Add</p>
        )}
      </button>
    </form>
  );
};

export default AddToCartInput;
