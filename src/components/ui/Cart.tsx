import { Product } from '@prisma/client';
import FavoriteToggleButton from '../shared/products/FavoriteToggleButton';
import LinkPendingIndicator from './LinkPendingIndicator';
import Link from 'next/link';

const Cart = ({ id, name, image, price }: Product) => {
  return (
    <div className='relative'>
      <Link href={`/products/${id}`}>
        <LinkPendingIndicator name={name} image={image} price={price} />
      </Link>
      <div className='absolute top-7 right-7'>
        <FavoriteToggleButton id={id} />
      </div>
    </div>
  );
};

export default Cart;
