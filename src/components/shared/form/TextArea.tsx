type FormInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
};

const FormInput = ({ name, labelText, defaultValue }: FormInputProps) => {
  return (
    <>
      <label htmlFor={name} className={`font-medium transition duration-300 dark:text-white`}>
        {labelText || name}
      </label>
      <textarea
        name={name}
        id={name}
        defaultValue={defaultValue}
        rows={5}
        required
        className={`mt-1 rounded-md border border-gray-300 px-2 py-1 opacity-50 transition duration-300 focus:opacity-100 focus:shadow-sm focus:outline-none dark:border-gray-800 dark:text-white`}
      />
    </>
  );
};

export default FormInput;
