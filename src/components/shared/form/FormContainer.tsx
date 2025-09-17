'use client';
import { actionFunction } from '@/lib/types/formTypes';
import { useActionState, useEffect } from 'react';

const FormContainer = ({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) => {
  const initialState = {
    message: '',
  };
  const [state, formAction] = useActionState(action, initialState);
  useEffect(() => {
    console.log(state.message);
  }, [state]);
  return (
    <form
      action={formAction}
      className={`mt-5 flex flex-col rounded-md border border-gray-300 p-8 shadow-md transition duration-300 dark:border-gray-800`}
    >
      {children}
    </form>
  );
};

export default FormContainer;
