import Cart from '@/components/ui/Cart';
import { Product } from '@prisma/client';

const ProductsGrid = ({ data }: { data: Product[] }) => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-10 mt-5'>
      {data.map((product) => {
        return <Cart key={product.id} {...product} />;
      })}
    </div>
  );
};

export default ProductsGrid;
