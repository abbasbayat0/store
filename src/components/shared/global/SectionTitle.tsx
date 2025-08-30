const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className='mb-8 text-3xl font-medium tracking-wider capitalize'>
      <h2>{title}</h2>
      <div className="border-b mt-10 opacity-20"></div>
    </div>
  );
};

export default SectionTitle;
