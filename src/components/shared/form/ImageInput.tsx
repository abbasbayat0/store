import useTheme from '@/lib/hooks/useTheme';

const name = 'image';

const ImageInput = () => {
  const dark = useTheme();
  return (
    <>
      <label
        htmlFor={name}
        className={`font-medium ${dark && 'text-white'} transition duration-300`}
      >
        Image
      </label>
      <input
        type='file'
        name={name}
        id={name}
        className={`mt-1 rounded-md border px-2 py-1 opacity-50 transition duration-300 focus:opacity-100 focus:shadow-sm focus:outline-none ${dark ? 'border-gray-800 text-white' : 'border-gray-300'} transition duration-300`}
        required
        accept='image/*'
      />
    </>
  );
};

export default ImageInput;
