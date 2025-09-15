export const catchError = (error: unknown) => {
  console.log(error);
  return { message: error instanceof Error ? error.message : 'there is an error' };
};
