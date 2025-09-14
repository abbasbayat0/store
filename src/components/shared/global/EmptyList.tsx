const EmptyList = ({
  text = 'no items found',
  className,
}: {
  text?: string;
  className?: string;
}) => {
  return <h2 className={`mt-10 text-center text-xl dark:text-white ${className}`}>{text}</h2>;
};

export default EmptyList;
