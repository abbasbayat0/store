const EmptyList = ({
  text = 'no items found',
  className,
}: {
  text?: string;
  className?: string;
}) => {
  return <h2 className={`text-xl ${className}`}>{text}</h2>;
};

export default EmptyList;
