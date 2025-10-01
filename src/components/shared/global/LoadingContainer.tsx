import CartSkeleton from '@/components/ui/CartSkeleton';

const LoadingContainer = () => {
  return (
    <div className='flex min-h-screen flex-wrap items-center justify-center gap-10'>
      <CartSkeleton />
      <CartSkeleton />
      <CartSkeleton />
    </div>
  );
};

export default LoadingContainer;
