const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className='mb-8 text-3xl font-medium tracking-wider capitalize'>
      <h2 className={`transition duration-300 dark:text-white`}>{title}</h2>
      <div
        className={`mt-10 border-b opacity-20 transition duration-300 dark:border-gray-600`}
      ></div>
    </div>
  );
};

export default SectionTitle;
