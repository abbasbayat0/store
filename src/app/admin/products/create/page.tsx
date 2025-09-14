import Button from '@/components/shared/form/Button';
import FormInput from '@/components/shared/form/FormInput';
import { handleSubmit } from '@/lib/utils/actions';
import { faker } from '@faker-js/faker';

const adminCreatePage = () => {
  const fakeName = faker.person.firstName();
  return (
    <div className='w-full px-5'>
      <h1 className={`text-2xl font-medium dark:text-white`}>Create Product</h1>
      <form
        action={handleSubmit}
        className={`mt-5 flex w-full flex-col rounded-md border border-gray-300 p-8 shadow-md transition duration-300 dark:border-gray-800`}
      >
        <FormInput name='product' type='text' defaultValue={fakeName} label='Product Name' />
        <Button />
      </form>
    </div>
  );
};

export default adminCreatePage;
