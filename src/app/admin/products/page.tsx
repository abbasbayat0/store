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
      <table className='w-full'>
        <caption>All Products</caption>
        <thead>
          <tr>
            <th>name</th>
            <th>company</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return <div key={item.id}></div>;
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default page;
