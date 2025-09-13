import { faker } from '@faker-js/faker';

const adminCreatePage = () => {
  const handleSubmit = async (formData: FormData) => {
    'use server';
    console.log(formData.get('name'));
  };

  const name = faker.person.firstName();
  return (
    <div className='w-full px-5'>
      <h1 className={`text-2xl font-medium`}>Create Product</h1>
      <form
        action={handleSubmit}
        className='mt-5 flex w-full flex-col rounded-md border border-gray-300 p-8 shadow-md'
      >
        <label htmlFor='name' className='font-medium'>
          Product Name
        </label>
        <input
          type='text'
          name='name'
          defaultValue={name}
          className='mt-1 rounded-md border border-gray-300 px-2 py-1 opacity-50 transition duration-300 focus:opacity-100 focus:shadow-sm focus:outline-none'
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
