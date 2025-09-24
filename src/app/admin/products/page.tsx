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
      <header className='w-full border-b border-gray-300 pb-3'>
        <div className='flex justify-around'>
          <p className='font-semibold opacity-70 dark:text-white'>Name</p>
          <p className='font-semibold opacity-70 dark:text-white'>Company</p>
          <p className='font-semibold opacity-70 dark:text-white'>Price</p>
          <p className='font-semibold opacity-70 dark:text-white'>Actions</p>
        </div>
      </header>
      <main className='mt-5 flex flex-col items-center justify-center gap-3'>
        {data.map((product) => {
          return (
            <div
              key={product.id}
              className='mt-2 flex w-full items-center justify-around border-b pb-1 border-gray-300'
            >
              <p className='font-semibold dark:text-white min-w-1/4 text-center'>{product.name}</p>
              <p className='font-semibold dark:text-white min-w-1/4 text-center'>{product.company}</p>
              <p className='font-semibold dark:text-white min-w-1/4 text-center'>{product.price}</p>
              <div className='flex gap-2 min-w-1/4 justify-center items-center'>
                <p>1</p>
                <p>2</p>
              </div>
            </div>
          );
        })}
      </main>
      <footer></footer>
    </div>
  );
};

export default page;
