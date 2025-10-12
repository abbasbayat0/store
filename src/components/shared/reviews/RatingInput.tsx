const RatingInput = () => {
  return (
    <div className={`flex flex-col`}>
      <label htmlFor='rating' className={`font-medium transition duration-300 dark:text-white`}>
        Rating
      </label>
      <input
        type='number'
        name='rating'
        id='rating'
        defaultValue={5}
        min={1}
        max={5}
        className={`mt-1 w-48 rounded-md border border-gray-300 px-2 py-1 opacity-50 transition duration-300 focus:opacity-100 focus:shadow-sm focus:outline-none min-[400px]:w-52 min-[500px]:w-64 sm:w-44 md:w-52 lg:w-96 dark:border-gray-800 dark:text-white`}
      />
    </div>
  );
};

export default RatingInput;
