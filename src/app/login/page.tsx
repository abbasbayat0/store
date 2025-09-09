import AuthForm from '@/components/ui/AuthForm';
import Link from 'next/link';

export default function Login() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>LogIn</h2>
          <p className='mt-2 text-center text-sm text-gray-600'>
            Or{' '}
            <Link href='/sign-up' className='font-medium text-blue-600 hover:text-blue-500'>
              Create
            </Link>
          </p>
        </div>

        <div className='rounded-lg bg-white p-6 shadow-md'>
          <AuthForm view='sign_in' />
        </div>

        <div className='text-center'>
          <Link href='/' className='text-sm text-blue-600 hover:text-blue-500'>
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
