import useTheme from '@/lib/hooks/useTheme';

type FormInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
};

const FormInput = ({ name, labelText, defaultValue }: FormInputProps) => {
  const dark = useTheme();
  return (
    <>
      <label
        htmlFor={name}
        className={`font-medium ${dark && 'text-white'} transition duration-300`}
      >
        {labelText || name}
      </label>
      <textarea
        name={name}
        id={name}
        defaultValue={defaultValue}
        rows={5}
        required
        className={`mt-1 rounded-md border px-2 py-1 opacity-50 transition duration-300 focus:opacity-100 focus:shadow-sm focus:outline-none ${dark ? 'border-gray-800 text-white' : 'border-gray-300'} transition duration-300`}
      />
    </>
  );
};

export default FormInput;
