const Loading = () => {
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
      <main className='mt-5 flex animate-pulse flex-col items-center justify-center gap-3 opacity-60'>
        {[1, 2, 3, 4].map((item) => {
          return (
            <div
              key={item}
              className='mt-2 flex w-full items-center justify-around gap-1 border-b border-gray-300 pb-1'
            >
              <div className='h-8 min-w-1/4 rounded-md bg-gray-300 text-center text-xs font-semibold underline opacity-70 transition duration-300 hover:opacity-90 sm:text-base dark:text-white'></div>
              <p className='h-8 min-w-1/4 rounded-md bg-gray-300 text-center text-xs font-semibold transition duration-300 sm:text-base dark:text-white'></p>
              <p className='h-8 min-w-1/4 rounded-md bg-gray-300 text-center text-xs font-semibold transition duration-300 sm:text-base dark:text-white'></p>
              <div className='flex h-8 min-w-1/4 items-center justify-center gap-3 rounded-md bg-gray-300'></div>
            </div>
          );
        })}
      </main>
      <footer className='mt-5 flex h-8 w-1/4 animate-pulse justify-center justify-self-center rounded-md bg-gray-300 opacity-60'>
        <p className='opacity-60 transition duration-300 dark:text-white'></p>
      </footer>
    </div>
  );
};

export default Loading;
