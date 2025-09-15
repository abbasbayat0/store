import Button from '@/components/shared/form/Button';
import PriceInput from '@/components/shared/form/CheckboxInput';
import FormContainer from '@/components/shared/form/FormContainer';
import FormInput from '@/components/shared/form/FormInput';
import ImageInput from '@/components/shared/form/ImageInput';
import TextArea from '@/components/shared/form/TextArea';
import { createNewProduct } from '@/lib/utils/actions';

const adminCreatePage = () => {
  return (
    <div className='px-5'>
      <h1 className={`text-2xl font-medium dark:text-white`}>Create Product</h1>
      <FormContainer action={createNewProduct}>
        <div className='flex flex-col items-center justify-between sm:flex-row'>
          <FormInput
            name='name'
            type='text'
            label='Product Name'
            defaultValue='name of the product'
          />
          <FormInput
            name='company'
            type='text'
            label='Company Name'
            defaultValue='the product company'
            className='mt-5 sm:mt-0'
          />
        </div>
        <div className='mt-5 flex flex-col items-center justify-between sm:flex-row'>
          <PriceInput />
          <ImageInput className='mt-5 sm:mt-0' />
        </div>
        <TextArea
          name='description'
          labelText='Product Description'
          defaultValue='enter your description here for the new product'
          className='mt-5 sm:mt-8'
        />
        <Button />
      </FormContainer>
    </div>
  );
};

export default adminCreatePage;
