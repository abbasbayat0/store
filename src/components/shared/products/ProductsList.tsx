import List from '@/components/ui/List';
import { Product } from '@prisma/client';

const ProductsList = ({ products }: { products: Product[] }) => {
  return (
    <div className='flex flex-col gap-5 mt-10'>
      {products.map((product) => {
        return <List key={product.id} {...product} />;
      })}
    </div>
  );
};

export default ProductsList;
