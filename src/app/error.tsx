'use client';

const error = ({ error, reset }: { error: Error | unknown; reset: () => void }) => {
  console.log(error);
  return (
    <div>
      <p onClick={() => reset()}>reset</p>
      <p>because of {error instanceof Error && error.message}</p>
    </div>
  );
};

export default error;
