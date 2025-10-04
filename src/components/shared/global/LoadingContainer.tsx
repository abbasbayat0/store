import CartSkeleton from '@/components/ui/CartSkeleton';

const LoadingContainer = () => {
  return (
    <div className='mt-5 flex min-h-screen flex-wrap items-center justify-center gap-10 lg:-mt-40'>
      <CartSkeleton />
      <CartSkeleton />
      <CartSkeleton />
    </div>
  );
};

export default LoadingContainer;
