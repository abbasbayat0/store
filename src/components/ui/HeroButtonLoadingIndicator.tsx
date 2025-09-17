'use client';
import { useLinkStatus } from 'next/link';

const HeroButtonLoadingIndicator = () => {
  const { pending } = useLinkStatus();
  return (
    <button
      className={`mt-10 cursor-pointer rounded-md bg-blue-600 px-8 py-3 text-xs font-medium text-white opacity-90 transition duration-300 ${pending && 'animate-pulse cursor-not-allowed'}`}
    >
      OUR PRODUCTS
    </button>
  );
};

export default HeroButtonLoadingIndicator;
