const name = 'price';
type FormInputNumberProps = {
  defaultValue?: number;
  className?: string;
};

function PriceInput({ defaultValue, className }: FormInputNumberProps) {
  return (
    <div className={`${className} flex flex-col`}>
      <label
        htmlFor='price'
        className={`w-full font-medium transition duration-300 dark:text-white`}
      >
        Price ($)
      </label>
      <input
        id={name}
        type='number'
        name={name}
        min={0}
        defaultValue={defaultValue || 100}
        required
        className={`mt-1 w-48 rounded-md border border-gray-300 px-2 py-1 opacity-50 transition duration-300 focus:opacity-100 focus:shadow-sm focus:outline-none min-[400px]:w-52 min-[500px]:w-64 sm:w-44 md:w-52 lg:w-72 dark:border-gray-800 dark:text-white`}
      />
    </div>
  );
}
export default PriceInput;
