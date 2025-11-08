'use client';

import { useState } from 'react';

const Comment = ({ comment }: { comment: string }) => {
  const [show, setShow] = useState(false);

  const finalComment = show ? comment : comment.slice(0, 50);

  return (
    <div className='mt-5 text-sm opacity-80 dark:text-white'>
      {comment.length <= 120 ? (
        <p>{finalComment}</p>
      ) : (
        <p>
          {finalComment} {!show && '...'}
          <br />
          <span
            onClick={() => setShow(!show)}
            className={`mx-2 cursor-pointer text-sm opacity-80 transition duration-300 hover:text-blue-600 hover:opacity-100 dark:hover:text-blue-400`}
          >
            {show ? 'Show Less' : 'Show More'}
          </span>
        </p>
      )}
    </div>
  );
};

export default Comment;
