import { GrRefresh } from 'react-icons/gr';
import { CiEdit } from 'react-icons/ci';
import { LuTrash2 } from 'react-icons/lu';
import Link from 'next/link';

const AdminProductsButtons = ({
  type,
  id,
  pending,
}: {
  type: 'edit' | 'delete';
  id: string;
  pending?: boolean;
}) => {
  const buttonIcon = () => {
    switch (type) {
      case 'edit':
        return (
          <Link href={`/admin/products/${id}`}>
            <CiEdit className='cursor-pointer text-lg transition duration-300 hover:scale-110 dark:text-white' />
          </Link>
        );
      case 'delete':
        return (
          <LuTrash2 className='cursor-pointer text-lg opacity-80 transition duration-300 hover:scale-110 dark:text-white' />
        );
      default:
        const never: never = type;
        throw new Error(`invalid type ${never}`);
    }
  };
  return (
    <button type='submit'>{pending ? <GrRefresh className='animate-spin' /> : buttonIcon()}</button>
  );
};

export default AdminProductsButtons;
