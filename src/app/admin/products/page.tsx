import EmptyList from '@/components/shared/global/EmptyList';
import { getAdminProducts } from '@/lib/utils/actions';
import Link from 'next/link';

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
          <p className='font-semibold opacity-70 transition duration-300 dark:text-white'>Name</p>
          <p className='font-semibold opacity-70 transition duration-300 dark:text-white'>
            Company
          </p>
          <p className='font-semibold opacity-70 transition duration-300 dark:text-white'>Price</p>
          <p className='font-semibold opacity-70 transition duration-300 dark:text-white'>
            Actions
          </p>
        </div>
      </header>
      <main className='mt-5 flex flex-col items-center justify-center gap-3'>
        {data.map((product) => {
          return (
            <div
              key={product.id}
              className='mt-2 flex w-full items-center justify-around border-b border-gray-300 pb-1'
            >
              <Link
                href={`/products/${product.id}`}
                className='min-w-1/4 text-center font-semibold underline opacity-70 transition duration-300 hover:opacity-90 dark:text-white'
              >
                {product.name}
              </Link>
              <p className='min-w-1/4 text-center font-semibold transition duration-300 dark:text-white'>
                {product.company}
              </p>
              <p className='min-w-1/4 text-center font-semibold transition duration-300 dark:text-white'>
                {product.price}
              </p>
              <div className='flex min-w-1/4 items-center justify-center gap-2'>
                <p>1</p>
                <p>2</p>
              </div>
            </div>
          );
        })}
      </main>
      <footer className='mt-5 flex justify-center'>
        <p className='opacity-60 transition duration-300 dark:text-white'>
          Total Products: {data.length}
        </p>
      </footer>
    </div>
  );
};

export default page;
