'use client';

import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { createUser } from '@/utils/actions';

const inputStyle = 'border shadow rounded py-2 px-3 text-gray-7000';
const btnStyle =
  'bg-lime-500 hover:bg-lime-700 text-white font-bold rounded-md capitalize py-2 px-4';
const formStyle = 'max-w-lg flex flex-col gap-y-4 shadow rounded m-4 p-8';

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type='submit' className={btnStyle} disabled={pending}>
      {pending ? 'submitting...' : 'submit'}
    </button>
  );
};

// const createUser = async () => {
//   'use server';
//   console.log('user created');
// };

function Form() {
  const [message, formAction] = useFormState(createUser, null);

  return (
    <form action={formAction} className={formStyle}>
      {message && <p className='bg-lime-300'>{message}</p>}

      <h2 className='text-xl mb-4 capitalize'>create user</h2>
      <input
        type='text'
        name='firstName'
        required
        className={inputStyle}
        defaultValue='nexterize'
      />
      <input
        type='text'
        name='lastName'
        required
        className={inputStyle}
        defaultValue='Solutions'
      />
      <SubmitButton />
    </form>
  );
}

export default Form;
