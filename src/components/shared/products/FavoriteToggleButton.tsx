import { CiHeart } from 'react-icons/ci';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FavoriteToggleButton = ({ id }: { id: string }) => {
  return (
    <div
      className={`z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-gray-100 p-1 text-black transition duration-300 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700`}
    >
      <CiHeart className='text-3xl' />
    </div>
  );
};

export default FavoriteToggleButton;
