type FormInputProps = {
  name: string;
  label: string;
  defaultChecked?: boolean;
};

const PriceInput = ({ defaultChecked, name, label }: FormInputProps) => {
  return (
    <div className='flex gap-2'>
      <input
        type='checkbox'
        name={name}
        id={name}
        defaultChecked={defaultChecked}
        className={`mt-1 rounded-md border border-gray-300 px-2 py-1 opacity-50 transition duration-300 focus:opacity-100 focus:shadow-sm focus:outline-none dark:border-gray-800 dark:text-white`}
      />
      <label htmlFor={name} className={`font-medium transition duration-300 dark:text-white`}>
        {label}
      </label>
    </div>
  );
};

export default PriceInput;
