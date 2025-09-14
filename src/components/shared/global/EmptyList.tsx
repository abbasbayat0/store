'use client';

import useTheme from '@/lib/hooks/useTheme';

const EmptyList = ({
  text = 'no items found',
  className,
}: {
  text?: string;
  className?: string;
}) => {
  const dark = useTheme();
  return (
    <h2 className={`mt-10 text-center text-xl ${dark ? 'text-white' : 'text-black'} ${className}`}>
      {text}
    </h2>
  );
};

export default EmptyList;
