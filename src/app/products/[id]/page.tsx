import BreadCrumbs from '@/components/shared/singleProduct/BreadCrumbs';
import Description from '@/components/shared/singleProduct/Description';
import { getSingle } from '@/lib/utils/actions';
import EmptyList from '@/components/shared/global/EmptyList';
import Image from 'next/image';
import ProductReviews from '@/components/shared/reviews/ProductReviews';
import SubmitReview from '@/components/shared/reviews/SubmitReview';

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const { message, data } = await getSingle(id);
  if (!data) {
    console.log(message);
    return <EmptyList className='mt-20' text='Item Not Found' />;
  }
  if (data)
    return (
      <div className='min-h-screen'>
        <BreadCrumbs name={data.name} />
        <div className='lg:flex lg:gap-16'>
          <div className='mt-16 hidden min-h-screen min-w-5/12 overflow-hidden rounded-lg lg:mt-5 lg:flex'>
            <Image
              width={300}
              height={400}
              priority
              unoptimized
              src={data.image}
              alt={id}
              className='min-h-full min-w-full object-cover'
            />
          </div>
          <Description {...data} />
        </div>
        <ProductReviews productId={data.id} />
        <SubmitReview productId={data.id} />
      </div>
    );
};

export default page;
