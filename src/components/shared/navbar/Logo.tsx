import LogoLoadingIndicator from '@/components/ui/LogoLoadingIndicator';
import Link from 'next/link';

const Logo = () => {
  return (
    <button>
      <Link
        href='/'
        className='flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 shadow-2xs shadow-blue-600'
      >
        <LogoLoadingIndicator />
      </Link>
    </button>
  );
};

export default Logo;
