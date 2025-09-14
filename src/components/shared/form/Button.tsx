'use client';
import { useFormStatus } from 'react-dom';
import { GrRefresh } from 'react-icons/gr';

const Button = ({ className, text }: { className?: string; text?: string }) => {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      disabled={pending}
      className={`mt-10 flex w-32 cursor-pointer items-center justify-center gap-1 rounded-lg bg-blue-600 px-3 py-2 text-white disabled:cursor-not-allowed ${pending ? 'opacity-70' : 'opacity-100'} ${className}`}
    >
      {pending ? (
        <div className='flex items-center justify-center gap-1'>
          <GrRefresh className='animate-spin' />
          <p>Creating...</p>
        </div>
      ) : (
        <p>{text || 'Submit'}</p>
      )}
    </button>
  );
};

export default Button;
