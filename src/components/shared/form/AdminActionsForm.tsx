'use client';
import { useActionState } from 'react';
import AdminProductsButtons from './AdminProductsButtons';
import { deleteProduct } from '@/lib/utils/actions';

const AdminActionsForm = (id: string) => {
  const deleteOne = deleteProduct.bind(null, id);
  const [state, action, isPending] = useActionState(deleteOne, { message: '' });
  console.log(state?.message);
  return (
    <form action={action}>
      <AdminProductsButtons pending={isPending} type='delete' id={id} />
    </form>
  );
};

export default AdminActionsForm;
