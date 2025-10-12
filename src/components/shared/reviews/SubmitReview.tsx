'use client';

import { createReviewAction } from '@/lib/utils/actions';
import { SignInButton, useUser } from '@clerk/nextjs';
import { useActionState, useState } from 'react';
import { GrRefresh } from 'react-icons/gr';
import RatingInput from './RatingInput';
import TextArea from '../form/TextArea';

const SubmitReview = () => {
  const [showForm, setShowForm] = useState(false);
  const { user } = useUser();
  const [state, formAction, pending] = useActionState(createReviewAction, { message: '' });
  console.log(state?.message);
  return (
    <div>
      {user ? (
        <p
          onClick={() => setShowForm(true)}
          className={`mt-10 flex w-32 cursor-pointer items-center justify-center gap-1 rounded-lg bg-blue-600 px-3 py-2 text-white ${showForm && 'hidden'}`}
        >
          Add Review
        </p>
      ) : (
        <SignInButton>
          <p
            title='you are not a user. click to singIn'
            className={`mt-10 flex w-32 cursor-pointer items-center justify-center gap-1 rounded-lg bg-blue-600 px-3 py-2 text-white opacity-70`}
          >
            Add Review
          </p>
        </SignInButton>
      )}
      <form
        action={formAction}
        className={`${!showForm && 'hidden'} mt-10 rounded-lg border border-gray-300 p-5 dark:border-gray-800`}
      >
        <input type='hidden' name='id' id='id' defaultValue={user?.id} />
        <input
          type='hidden'
          name='authorName'
          id='authorName'
          defaultValue={user?.firstName as string}
        />
        <input type='hidden' name='image' id='image' defaultValue={user?.imageUrl} />
        <RatingInput />
        <TextArea className='mt-5' name='comment' defaultValue='enter your comment here' />
        <button
          onClick={() =>
            setTimeout(() => {
              setShowForm(false);
            }, 1000)
          }
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
    </div>
  );
};

export default SubmitReview;
