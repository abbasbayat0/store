'use client';
import useTheme from '@/lib/hooks/useTheme';
import { handleSubmit } from '@/lib/utils/actions';
import { faker } from '@faker-js/faker';

const adminCreatePage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dark = useTheme();
  const name = faker.person.firstName();
  return (
    <div className='w-full px-5'>
      <h1 className={`text-2xl font-medium ${dark && 'text-white'}`}>Create Product</h1>
      <form
        action={handleSubmit}
        className={`mt-5 flex w-full flex-col rounded-md border p-8 shadow-md ${dark ? 'border-gray-800' : 'border-gray-300'} transition duration-300`}
      >
        <label
          htmlFor='name'
          className={`font-medium ${dark && 'text-white'} transition duration-300`}
        >
          Product Name
        </label>
        <input
          type='text'
          name='name'
          defaultValue={name}
          className={`mt-1 rounded-md border px-2 py-1 opacity-50 transition duration-300 focus:opacity-100 focus:shadow-sm focus:outline-none ${dark ? 'border-gray-800 text-white' : 'border-gray-300'} transition duration-300`}
        />
        <button
          type='submit'
          className={`mt-10 w-32 cursor-pointer rounded-lg bg-blue-600 px-3 py-2 text-white`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default adminCreatePage;
