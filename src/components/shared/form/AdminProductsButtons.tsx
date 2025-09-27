'use client';
import { useFormStatus } from 'react-dom';
import { GrRefresh } from 'react-icons/gr';
import { CiEdit } from 'react-icons/ci';
import { LuTrash2 } from 'react-icons/lu';
import { deleteProduct } from '@/lib/utils/actions';

const AdminProductsButtons = ({ type, id }: { type: 'edit' | 'delete'; id: string }) => {
  const { pending } = useFormStatus();
  const buttonIcon = () => {
    switch (type) {
      case 'edit':
        return (
          <CiEdit
            className='cursor-pointer text-lg transition duration-300 hover:scale-110 dark:text-white'
            onClick={() => {}}
          />
        );
      case 'delete':
        return (
          <LuTrash2
            className='cursor-pointer text-lg opacity-80 transition duration-300 hover:scale-110 dark:text-white'
            onClick={() => {
              deleteProduct(id);
            }}
          />
        );
      default:
        const never: never = type;
        throw new Error(`invalid type ${never}`);
    }
  };
  return <button>{pending ? <GrRefresh className='animate-spin' /> : buttonIcon()}</button>;
};

export default AdminProductsButtons;
