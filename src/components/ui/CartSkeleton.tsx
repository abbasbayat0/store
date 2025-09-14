const CartSkeleton = () => {
  return (
    <div className='relative'>
      <div
        className={`group dark:border-gra800 flex w-66 flex-col items-center justify-center rounded-md border border-gray-300 p-5 shadow-md transition duration-300 hover:shadow-lg lg:w-72 lg:rounded-xl xl:w-[370px] dark:border-gray-700`}
      >
        <div className='mx-auto flex h-52 w-full overflow-hidden rounded-md'>
          <div className='h-66 w-56 bg-gray-200 object-cover transition duration-300 group-hover:scale-110 lg:w-66 xl:w-[350px] dark:bg-gray-800'></div>
        </div>
        <p
          className={`mx-auto mt-5 h-7 w-1/2 bg-gray-200 text-lg font-medium dark:bg-gray-800`}
        ></p>
        <p className={`mx-auto mt-3 h-6 w-1/3 bg-gray-200 text-lg opacity-60 dark:bg-gray-800`}></p>
      </div>
    </div>
  );
};

export default CartSkeleton;
