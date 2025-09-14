type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};

const FormInput = ({ name, type, label, defaultValue, placeholder }: FormInputProps) => {
  return (
    <>
      <label htmlFor={name} className={`font-medium transition duration-300 dark:text-white`}>
        {label || name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={`border-gray-300} mt-1 rounded-md border px-2 py-1 opacity-50 transition duration-300 focus:opacity-100 focus:shadow-sm focus:outline-none dark:border-gray-800 dark:text-white`}
      />
    </>
  );
};

export default FormInput;
