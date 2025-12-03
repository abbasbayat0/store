import { Prisma } from '@prisma/client';

type CartWithProduct = Prisma.CartItemGetPayload<{
  include: { product: true };
}>;

const CartItemsList = ({ cartItems }: { cartItems: CartWithProduct[] }) => {
  return <div className='h-52 w-2/3 bg-green-500 p-5'></div>;
};

export default CartItemsList;
