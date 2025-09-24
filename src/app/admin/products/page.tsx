import EmptyList from '@/components/shared/global/EmptyList';
import { getAdminProducts } from '@/lib/utils/actions';

const page = async () => {
  const { data, message } = await getAdminProducts();
  if (data.length === 0) {
    console.log(message);
    return <EmptyList text='No Products Exist' />;
  }
  return (
    <div className='min-h-screen'>
      <div></div>
    </div>
  );
};

export default page;
