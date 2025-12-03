import CartItemsList from '@/components/shared/cart/CartItemsList';
import CartTotals from '@/components/shared/cart/CartTotals';
import EmptyList from '@/components/shared/global/EmptyList';
import SectionTitle from '@/components/shared/global/SectionTitle';
import { fetchOrCreateCart, updateCart } from '@/lib/utils/actions';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const page = async () => {
  const { userId } = await auth();
  if (!userId) redirect('/');
  const cart = await fetchOrCreateCart({ userId });
  const { currentCart, cartItems } = await updateCart(cart);
  if (cart.numItemsInCart === 0) return <EmptyList text='There Is No Product In Your Cart !' />;
  return (
    <>
      <SectionTitle title='Shipping Cart' />
      <div className='flex items-center justify-between'>
        <CartItemsList cartItems={cartItems} />
        <CartTotals cart={currentCart} />
      </div>
    </>
  );
};

export default page;
