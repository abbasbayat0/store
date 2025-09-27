import { currentUser } from '@clerk/nextjs/server';

export const getUser = async () => {
  const user = await currentUser();
  if (!user) throw new Error('you are not a user');
  return user;
};
export const getAdmin = async () => {
  const user = await getUser();
  if (user.id !== process.env.NEXT_PUBLIC_ADMIN_ID) throw new Error('you are not admin');
  return user;
};
