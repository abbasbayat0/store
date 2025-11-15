import { SignInButton, SignUpButton } from '@clerk/nextjs';
import { Dispatch, SetStateAction } from 'react';

const SignedOutLinks = ({ setDropOpen }: { setDropOpen: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <div
      onMouseLeave={() => {
        setTimeout(() => {
          setDropOpen(false);
        }, 1000);
      }}
      className={`absolute top-9 left-0 flex w-36 flex-col items-start justify-around gap-1 rounded-md border-none bg-white px-2 py-2 shadow-md shadow-gray-300 transition duration-300 sm:w-28 lg:w-32 xl:w-36 dark:border dark:border-gray-800 dark:bg-gray-950 dark:shadow-gray-800`}
    >
      <div
        className={`w-full border-b border-gray-100 transition duration-300 dark:border-gray-800`}
      >
        <div
          className={`flex h-7 w-full items-center rounded-md px-2 tracking-wide opacity-80 transition duration-300 hover:bg-gray-100 dark:hover:bg-gray-800`}
          onClick={() => setDropOpen(false)}
        >
          <SignInButton mode='modal'>
            <p className='capitalize'>Log In</p>
          </SignInButton>
        </div>
      </div>
      <div
        className={`w-full border-b border-gray-100 transition duration-300 dark:border-gray-800`}
      >
        <div
          className={`flex h-7 w-full items-center rounded-md px-2 tracking-wide opacity-80 transition duration-300 hover:bg-gray-100 dark:hover:bg-gray-800`}
          onClick={() => setDropOpen(false)}
        >
          <SignUpButton mode='modal'>
            <p className='capitalize'>Register</p>
          </SignUpButton>
        </div>
      </div>
    </div>
  );
};

export default SignedOutLinks;
