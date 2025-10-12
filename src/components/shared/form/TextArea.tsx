type FormInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
  className?: string;
};

const TextArea = ({ name, labelText, defaultValue, className }: FormInputProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={name} className={`font-medium transition duration-300 dark:text-white capitalize`}>
        {labelText || name}
      </label>
      <textarea
        name={name}
        id={name}
        defaultValue={defaultValue}
        rows={5}
        required
        className={`mt-1 w-48 rounded-md border border-gray-300 px-2 py-1 opacity-50 transition duration-300 focus:opacity-100 focus:shadow-sm focus:outline-none min-[400px]:w-52 min-[500px]:w-64 sm:w-full dark:border-gray-800 dark:text-white`}
      />
    </div>
  );
};

export default TextArea;
