const name = 'image';

const ImageInput = () => {
  return (
    <>
      <label htmlFor={name} className={`font-medium transition duration-300 dark:text-white`}>
        Image
      </label>
      <input
        type='file'
        name={name}
        id={name}
        className={`mt-1 rounded-md border border-gray-300 px-2 py-1 opacity-50 transition duration-300 focus:opacity-100 focus:shadow-sm focus:outline-none dark:border-gray-800 dark:text-white`}
        required
        accept='image/*'
      />
    </>
  );
};

export default ImageInput;
