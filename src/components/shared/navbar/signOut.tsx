import { SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';

const SignOut = () => {
  return (
    <SignOutButton>
      <Link href='/' className='opacity-70 text-sm mx-auto mt-2 font-bold'>Sign Out</Link>
    </SignOutButton>
  );
};

export default SignOut;
