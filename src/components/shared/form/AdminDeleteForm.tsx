'use client';
import AdminProductsButtons from './AdminProductsButtons';
import { deleteProduct } from '@/lib/utils/actions';
import { useActionState } from 'react';

const AdminDeleteForm = ({ id }: { id: string }) => {
  const deleteOne = deleteProduct.bind(null, { id });
  const [state, formAction, pending] = useActionState(deleteOne, { message: '' });

  return (
    <form action={formAction}>
      <AdminProductsButtons pending={pending} type='delete' id={id} />
    </form>
  );
};

export default AdminDeleteForm;
