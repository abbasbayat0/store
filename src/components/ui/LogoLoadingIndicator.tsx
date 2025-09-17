'use client';
import { useLinkStatus } from 'next/link';
import { VscCode } from 'react-icons/vsc';

const LogoLoadingIndicator = () => {
  const { pending } = useLinkStatus();
  return <VscCode className={`text-xl text-white ${pending && 'animate-pulse'}`} />;
};

export default LogoLoadingIndicator;
