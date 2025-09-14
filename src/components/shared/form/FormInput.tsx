import useTheme from '@/lib/hooks/useTheme';

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};

const FormInput = ({ name, type, label, defaultValue, placeholder }: FormInputProps) => {
  const dark = useTheme();
  return (
    <>
      <label
        htmlFor={name}
        className={`font-medium ${dark && 'text-white'} transition duration-300`}
      >
        {label || name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={`mt-1 rounded-md border px-2 py-1 opacity-50 transition duration-300 focus:opacity-100 focus:shadow-sm focus:outline-none ${dark ? 'border-gray-800 text-white' : 'border-gray-300'} transition duration-300`}
      />
    </>
  );
};

export default FormInput;
