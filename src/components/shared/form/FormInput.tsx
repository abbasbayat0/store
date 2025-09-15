type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  className?: string;
};

const FormInput = ({ name, type, label, defaultValue, placeholder, className }: FormInputProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={name} className={`font-medium transition duration-300 dark:text-white`}>
        {label || name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={`mt-1 w-48 rounded-md border border-gray-300 px-2 py-1 opacity-50 transition duration-300 focus:opacity-100 focus:shadow-sm focus:outline-none min-[400px]:w-52 min-[500px]:w-64 sm:w-44 md:w-52 lg:w-96 dark:border-gray-800 dark:text-white`}
      />
    </div>
  );
};

export default FormInput;
