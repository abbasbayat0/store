import { LuUserRound } from 'react-icons/lu';

const userIcon = () => {
  return (
    <div className='flex h-6 w-6 items-center justify-center rounded-full bg-blue-600'>
      <LuUserRound className='text-2xl text-white' />
    </div>
  );
};

export default userIcon;
