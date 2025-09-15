'use client';

type CheckboxInputProps = {
  name: string;
  label: string;
  defaultChecked?: boolean;
  className?: string;
};

export default function CheckboxInput({ name, label, defaultChecked = false, className }: CheckboxInputProps) {
  return (
    <div className={`flex gap-2 items-center ${className}`}>
      <label htmlFor={name} className='font-medium transition duration-300 dark:text-white'>
        {label}
      </label>
      <input type='checkbox' id={name} name={name} defaultChecked={defaultChecked} />
    </div>
  );
}
