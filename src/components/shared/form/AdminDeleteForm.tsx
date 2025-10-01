'use client';
import AdminProductsButtons from './AdminProductsButtons';
import { deleteProduct } from '@/lib/utils/actions';
import FormContainer from './FormContainer';
import { useFormStatus } from 'react-dom';

const AdminDeleteForm = ({ id }: { id: string }) => {
  const deleteOne = deleteProduct.bind(null, { id });
  const { pending } = useFormStatus();
  return (
    <FormContainer action={deleteOne}>
      <AdminProductsButtons pending={pending} type='delete' id={id} />
    </FormContainer>
  );
};

export default AdminDeleteForm;
