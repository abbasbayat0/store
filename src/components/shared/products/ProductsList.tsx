import List from '@/components/ui/List';
import { Product } from '@prisma/client';

const ProductsList = ({ data }: { data: Product[] }) => {
  return (
    <div className='flex flex-col gap-5 mt-10'>
      {data.map((product) => {
        return <List key={product.id} {...product} />;
      })}
    </div>
  );
};

export default ProductsList;
