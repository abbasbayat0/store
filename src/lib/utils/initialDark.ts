'use client';
export const initialDark = () => {
  if (typeof window !== 'undefined') {
    return (
      window.matchMedia('(prefers-color-scheme: dark)').matches &&
      Boolean(JSON.parse(localStorage.getItem('theme') as string))
    );
  }
  return false;
};
