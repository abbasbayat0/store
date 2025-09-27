'use client';
import { useFormStatus } from 'react-dom';
import { GrRefresh } from 'react-icons/gr';
import { CiEdit } from 'react-icons/ci';
import { LuTrash2 } from 'react-icons/lu';

const AdminProductsButtons = ({ type }: { type: 'edit' | 'delete' }) => {
  const { pending } = useFormStatus();
  const buttonIcon = () => {
    switch (type) {
      case 'edit':
        return <CiEdit className='text-lg hover:scale-110 transition duration-300 dark:text-white cursor-pointer' />;
      case 'delete':
        return <LuTrash2 className='text-lg opacity-80 hover:scale-110 transition duration-300 dark:text-white cursor-pointer' />;
      default:
        const never: never = type;
        throw new Error(`invalid type ${never}`);
    }
  };
  return <button>{pending ? <GrRefresh className='animate-spin' /> : buttonIcon()}</button>;
};

export default AdminProductsButtons;
