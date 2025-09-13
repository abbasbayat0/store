'use client';
import useTheme from '@/lib/hooks/useTheme';
import { SignInButton, SignUpButton } from '@clerk/nextjs';
import { Dispatch, SetStateAction } from 'react';

const SignedOutLinks = ({ setDropOpen }: { setDropOpen: Dispatch<SetStateAction<boolean>> }) => {
  const dark = useTheme();
  return (
    <div
      className={`absolute top-9 left-0 flex w-36 flex-col items-start justify-around gap-1 rounded-md px-2 py-2 sm:w-28 lg:w-32 xl:w-36 ${dark ? 'border border-gray-800 bg-gray-950' : 'border-none bg-white shadow-md shadow-gray-300'} transition duration-300`}
    >
      <div
        className={`w-full border-b ${dark ? 'border-gray-800' : 'border-gray-100'} transition duration-300`}
      >
        <div
          className={`flex h-7 w-full items-center rounded-md px-2 tracking-wide opacity-80 transition ${dark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition duration-300`}
          onClick={() => setDropOpen(false)}
        >
          <SignInButton mode='modal'><p>Log In</p></SignInButton>
        </div>
      </div>
      <div
        className={`w-full border-b ${dark ? 'border-gray-800' : 'border-gray-100'} transition duration-300`}
      >
        <div
          className={`flex h-7 w-full items-center rounded-md px-2 tracking-wide opacity-80 transition ${dark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition duration-300`}
          onClick={() => setDropOpen(false)}
        >
          <SignUpButton mode='modal'><p>Register</p></SignUpButton>
        </div>
      </div>
    </div>
  );
};

export default SignedOutLinks;
