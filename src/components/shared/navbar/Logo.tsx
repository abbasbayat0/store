import Link from 'next/link';
import { VscCode } from 'react-icons/vsc';

const Logo = () => {
  return (
    <button>
      <Link
        href='/'
        className='flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 shadow-2xs shadow-blue-600'
      >
        <VscCode className='text-xl text-white' />
      </Link>
    </button>
  );
};

export default Logo;
