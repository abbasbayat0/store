import { Prisma } from '@prisma/client';
import { FirstColumn, FourthColumn, SecondColumn } from './CartItemColumns';
import ThirdColumn from './ThirdColumn';

type CartWithProduct = Prisma.CartItemGetPayload<{
  include: { product: true };
}>;

const CartItemsList = ({ cartItems }: { cartItems: CartWithProduct[] }) => {
  return (
    <div className='w-full min-[500px]:w-2/3 p-5 overflow-hidden sm:w-1/2 md:w-full lg:w-2/3'>
      {cartItems.map((cartItem) => {
        const { id, amount } = cartItem;
        const { id: productId, image, name, company, price } = cartItem.product;
        return (
          <div
            className='flex flex-col md:flex-row gap-5 rounded-lg border border-gray-200 px-5 py-8 shadow-md transition duration-300 dark:border-gray-800'
            key={cartItem.cartId}
          >
            <FirstColumn image={image} name={name} />
            <SecondColumn name={name} company={company} productId={productId} />
            <ThirdColumn id={id} amount={amount} />
            <FourthColumn price={price} />
          </div>
        );
      })}
    </div>
  );
};

export default CartItemsList;
