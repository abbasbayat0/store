'use client';
import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import { LuUserRound } from 'react-icons/lu';

const UserIcon = () => {
  const { user } = useUser();
  return (
    <div className='flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 overflow-hidden'>
      {user ? (
        <Image src={user.imageUrl} alt={user.id} width={24} height={24} className='object-cover' />
      ) : (
        <LuUserRound className='text-2xl text-white' />
      )}
    </div>
  );
};

export default UserIcon;
