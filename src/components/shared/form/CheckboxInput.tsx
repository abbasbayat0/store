'use client';
import useTheme from '@/lib/hooks/useTheme';

type FormInputProps = {
  name: string;
  label: string;
  defaultChecked?: boolean;
};

const PriceInput = ({ defaultChecked, name, label }: FormInputProps) => {
  const dark = useTheme();
  return (
    <div className='flex gap-2'>
      <input
        type='checkbox'
        name={name}
        id={name}
        defaultChecked={defaultChecked}
        className={`mt-1 rounded-md border px-2 py-1 opacity-50 transition duration-300 focus:opacity-100 focus:shadow-sm focus:outline-none ${dark ? 'border-gray-800 text-white' : 'border-gray-300'} transition duration-300`}
      />
      <label
        htmlFor={name}
        className={`font-medium ${dark && 'text-white'} transition duration-300`}
      >
        {label}
      </label>
    </div>
  );
};

export default PriceInput;
