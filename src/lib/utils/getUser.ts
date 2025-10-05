import { currentUser, User } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export const getUser = async () => {
  const user = await currentUser();
  return user as User;
};
export const getAdmin = async () => {
  const user = await getUser();
  if (user?.id !== process.env.NEXT_PUBLIC_ADMIN_ID) redirect('/');
  return user;
};
