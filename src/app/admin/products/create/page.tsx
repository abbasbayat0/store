'use client';
import Button from '@/components/shared/form/Button';
import FormInput from '@/components/shared/form/FormInput';
import useTheme from '@/lib/hooks/useTheme';
import { handleSubmit } from '@/lib/utils/actions';
import { faker } from '@faker-js/faker';

const adminCreatePage = () => {
  const fakeName = faker.person.firstName();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dark = useTheme();
  return (
    <div className='w-full px-5'>
      <h1 className={`text-2xl font-medium ${dark && 'text-white'}`}>Create Product</h1>
      <form
        action={handleSubmit}
        className={`mt-5 flex w-full flex-col rounded-md border p-8 shadow-md ${dark ? 'border-gray-800' : 'border-gray-300'} transition duration-300`}
      >
        <FormInput name='product' type='text' defaultValue={fakeName} label='Product Name' />
        <Button />
      </form>
    </div>
  );
};

export default adminCreatePage;
