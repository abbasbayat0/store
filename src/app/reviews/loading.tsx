const loading = () => {
  return (
    <div>
      <div className='border-b border-gray-300 pb-9 dark:border-gray-600'>
        <div className='h-10 w-56 rounded-md bg-gray-200 dark:bg-gray-800'></div>
      </div>
      <section className='mt-8 flex flex-wrap justify-around gap-8'>
        {[1, 2].map((review) => {
          return <ReviewLoading key={review} />;
        })}
      </section>
    </div>
  );
};

const ReviewLoading = () => {
  return (
    <div className='min-w-5/12 rounded-xl border border-gray-100 p-5 shadow-md transition duration-300 hover:border-gray-200 dark:border-gray-800 dark:hover:border-gray-700'>
      <div className='flex items-center gap-3'>
        <div className='relative h-10 w-10 overflow-hidden rounded-full bg-gray-300'></div>
        <div className='flex flex-col gap-1'>
          <div className='h-5 w-24 rounded-md bg-gray-300'></div>
          <div className='h-5 w-20 rounded-md bg-gray-300'></div>
        </div>
      </div>
      <div className='mt-3 h-12 w-72 rounded-md bg-gray-300'></div>
    </div>
  );
};

export default loading;
