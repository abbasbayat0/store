import { formatCurrency } from '@/lib/utils/format';
import { Cart } from '@prisma/client';

const CartTotals = ({ cart }: { cart: Cart }) => {
  const { cartTotal, shipping, tax, orderTotal } = cart;
  return (
    <div className='flex w-1/3 flex-col p-5'>
      <div className='w-full rounded-lg border border-gray-300 p-8 shadow-md'>
        <Rows title='subtotal' amount={cartTotal} />
        <Rows title='shipping' amount={shipping} />
        <Rows title='tax' amount={tax} />
        <Rows title='order total' amount={orderTotal} last />
      </div>
      <form>
        <button
          type='submit'
          className='mt-5 w-full cursor-pointer rounded-lg bg-blue-600 p-2 text-sm font-bold text-white shadow-md'
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

const Rows = ({
  title,
  amount,
  last = false,
}: {
  title: string;
  amount: number;
  last?: boolean;
}) => {
  return (
    <div
      className={`flex items-center justify-between ${last ? 'mt-8' : 'mt-3 border-b border-b-gray-300'}`}
    >
      <p className={`text-sm capitalize ${last ? 'font-bold' : ''}`}>{title}</p>
      <p className={`text-sm ${last ? 'font-bold' : ''}`}>{formatCurrency(amount)}</p>
    </div>
  );
};

export default CartTotals;
