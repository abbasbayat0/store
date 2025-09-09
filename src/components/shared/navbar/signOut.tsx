import { SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';

const SignOut = () => {
  return (
    <SignOutButton>
      <Link href='/'>signOut</Link>
    </SignOutButton>
  );
};

export default SignOut;
