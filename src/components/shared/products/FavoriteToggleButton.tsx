import { SignInButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { CiHeart } from 'react-icons/ci';
import FavoriteToggleForm from './FavoriteToggleForm';

const FavoriteToggleButton = async ({ id }: { id: string }) => {
  const { userId } = await auth();
  let user = 
  if(userId)
  return (
    <div
      className={`z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-gray-100 p-1 text-black transition duration-300 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700`}
    >
      {userId ? (
        <FavoriteToggleForm />
      ) : (
        <SignInButton>
          <CiHeart className='text-3xl' />
        </SignInButton>
      )}
    </div>
  );
};

export default FavoriteToggleButton;
