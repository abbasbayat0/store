const name = 'price';
type FormInputProps = {
  defaultValue?: number;
};

const PriceInput = ({ defaultValue }: FormInputProps) => {
  return (
    <>
      <label htmlFor={name} className={`font-medium transition duration-300 dark:text-white`}>
        Price ($)
      </label>
      <input
        type='number'
        name={name}
        min={0}
        defaultValue={defaultValue || 100}
        className={`mt-1 rounded-md border border-gray-300 px-2 py-1 opacity-50 transition duration-300 focus:opacity-100 focus:shadow-sm focus:outline-none dark:border-gray-800 dark:text-white`}
        required
      />
    </>
  );
};

export default PriceInput;
