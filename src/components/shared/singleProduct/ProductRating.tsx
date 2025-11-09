
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';

const Rating = async ({ data }: { data: {rating:number}[] }) => {
  let total = 0;
  data.forEach((item) => (total += item.rating));
  const ratingCount = data.length;
  const rating = total / ratingCount;
  const stars = [...Array(5).fill(0)];
  let starsCount = 0;
  const newStars = stars.map((star) => {
    if (starsCount !== Number(rating.toFixed())) {
      starsCount += 1;
      return 1;
    }
    return star;
  });

  return (
    <p className='flex items-center gap-2 dark:text-white'>
      {newStars.map((star, index) => {
        if (star === 1) return <FaStar key={index} />;
        return <FaRegStar key={index} />;
      })}
      {data.length>1 && `${ratingCount} reviews`}
    </p>
  );
};

export default Rating;
