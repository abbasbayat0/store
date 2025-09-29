import Button from '@/components/shared/form/Button';
import CheckboxInput from '@/components/shared/form/CheckedInput';
import FormContainer from '@/components/shared/form/FormContainer';
import FormInput from '@/components/shared/form/FormInput';
import ImageInput from '@/components/shared/form/ImageInput';
import PriceInput from '@/components/shared/form/PriceInput';
import TextArea from '@/components/shared/form/TextArea';
import EmptyList from '@/components/shared/global/EmptyList';
import { getSingle, updateProduct } from '@/lib/utils/actions';

const AdminEditProducts = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const { message, data } = await getSingle(id);
  if (!data) {
    console.log(message);
    return <EmptyList className='mt-20' text='Item Not Found' />;
  }
  return (
    <div className='px-5'>
      <h1 className={`text-2xl font-medium dark:text-white`}>Update Product</h1>
      <FormContainer action={updateProduct}>
        <input type='hidden' value={id} name='id' />
        <div className='flex flex-col items-center justify-between sm:flex-row'>
          <FormInput name='name' type='text' label='Product Name' defaultValue={data.name} />
          <FormInput
            name='company'
            type='text'
            label='Company Name'
            defaultValue={data.company}
            className='mt-5 sm:mt-0'
          />
        </div>
        <div className='mt-5 flex flex-col items-center justify-between sm:flex-row'>
          <PriceInput defaultValue={data.price} />
          {/* <ImageInput /> */}
          <div className={`flex flex-col`}>
            <label
              htmlFor='image'
              className={`font-medium transition duration-300 dark:text-white`}
            >
              Image
            </label>
            <input
              type='file'
              name='image'
              id='image'
              className={`mt-1 w-48 rounded-md border border-gray-300 px-2 py-1 opacity-50 transition duration-300 focus:opacity-100 focus:shadow-sm focus:outline-none min-[400px]:w-52 min-[500px]:w-64 sm:w-44 md:w-52 lg:w-96 dark:border-gray-800 dark:text-white`}
              accept='image/*'
            />
          </div>
        </div>
        <TextArea
          name='description'
          labelText='Product Description'
          defaultValue={data.description}
          className='mt-5 sm:mt-8'
        />
        <CheckboxInput
          label='Featured:'
          defaultChecked={data.featured}
          name='featured'
          className='mt-5'
        />
        <Button text='Update' />
      </FormContainer>
    </div>
  );
};

export default AdminEditProducts;
