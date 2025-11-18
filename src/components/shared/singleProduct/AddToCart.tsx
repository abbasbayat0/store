import { SignInButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import AddToCartInput from './AddToCartInput';

const AddToCart = async ({id}:{id:string}) => {
  const { userId } = await auth();

  return (
    <div className='mt-10'>
      {userId ? (
        <AddToCartInput id={id} />
      ) : (
        <div className='flex flex-col gap-2'>
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
          <SignInButton mode='modal'>
            <p
              title='SignIn If You Want To Add This Product To Your Cart'
              className={`mt-5 flex w-32 cursor-pointer items-center justify-center gap-1 rounded-lg bg-blue-600 px-3 py-2 text-white`}
            >
              SignIn
            </p>
          </SignInButton>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
