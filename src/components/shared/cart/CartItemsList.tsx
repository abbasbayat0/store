import { Prisma } from '@prisma/client';
import { FirstColumn, FourthColumn, SecondColumn } from './CartItemColumns';
import ThirdColumn from './ThirdColumn';

type CartWithProduct = Prisma.CartItemGetPayload<{
  include: { product: true };
}>;

const CartItemsList = ({ cartItems }: { cartItems: CartWithProduct[] }) => {
  return (
    <div className='w-2/3 p-5'>
      {cartItems.map((cartItem) => {
        const { id, amount } = cartItem;
        const { id: productId, image, name, company, price } = cartItem.product;
        return (
          <div
            className='flex gap-5 rounded-lg border border-gray-200 px-5 py-8 shadow-md'
            key={cartItem.cartId}
          >
            <FirstColumn image={image} name={name} />
            <SecondColumn name={name} company={company} productId={productId} />
            <ThirdColumn />
            <FourthColumn price={price} />
          </div>
        );
      })}
    </div>
  );
};

export default CartItemsList;
