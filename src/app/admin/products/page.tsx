import EmptyList from '@/components/shared/global/EmptyList';
import { getAdminProducts } from '@/lib/utils/actions';

const page = async () => {
  const { data, message } = await getAdminProducts();
  if (!data) {
    console.log(message);
    return <EmptyList text='No Products Exist' />;
  }
  return <div className='min-h-screen'></div>;
};

export default page;
