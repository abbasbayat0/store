import UserIcon from './UserIcon';
import { TbMenu3 } from 'react-icons/tb';

const LinksDropdown = () => {
  return (
    <div className='relative flex h-8 w-24 items-center justify-around rounded-md border-[1px] border-gray-300 shadow-2xs shadow-gray-300'>
      <TbMenu3 className='text-2xl' />
      <UserIcon />
    </div>
  );
};

export default LinksDropdown;
