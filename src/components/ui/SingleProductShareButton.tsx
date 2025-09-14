import { FiShare2 } from 'react-icons/fi';

const SingleProductShareButton = () => {
  return (
    <div
      className={`z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-gray-100 p-1 text-black transition duration-300 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700`}
    >
      <FiShare2 className='text-lg' />
    </div>
  );
};

export default SingleProductShareButton;
