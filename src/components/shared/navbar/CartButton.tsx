import { fetchNumItemsInCart } from '@/lib/utils/actions';
import { LuShoppingCart } from 'react-icons/lu';

const CartButton = async () => {
  const value = await fetchNumItemsInCart();
  return (
    <div
      className={`relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border-[1px] border-gray-300 shadow-2xs shadow-gray-300 transition duration-300 dark:border-gray-800 dark:text-white dark:shadow-none dark:hover:bg-gray-800`}
    >
      <LuShoppingCart className='text-sm' />
      <span className='absolute -top-3 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-sm text-white'>
        {value}
      </span>
    </div>
  );
};

export default CartButton;
