const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`max-w-6xl xl:max-w-7xl px-8 mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
