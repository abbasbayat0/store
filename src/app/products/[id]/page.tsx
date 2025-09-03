import BreadCrumbs from '@/components/shared/singleProduct/BreadCrumbs';
import Description from '@/components/shared/singleProduct/Description';
import { getSingle } from '@/lib/utils/actions';

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const product = await getSingle(id);
  return (
    <div>
      <BreadCrumbs name={product.name} />
      <div className='lg:flex lg:gap-16'>
        <div className='mt-16 hidden min-h-screen min-w-5/12 overflow-hidden rounded-lg lg:mt-5 lg:flex'>
          <img src={product.image} alt={id} className='min-h-full min-w-full object-cover' />
        </div>
        <Description {...product} />
      </div>
    </div>
  );
};

export default page;
