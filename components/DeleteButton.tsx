import { deleteUser, removeUser } from '@/utils/actions';
import React from 'react';

function DeleteButton({ id }: { id: string }) {
  const removeUsersWithId = removeUser.bind(null, id);
  return (
    <form action={removeUsersWithId}>
      <input type='hidden' name='name' value='shakeAndBake' />
      <button
        className='bg-red-500 text-white text-xs rounded mb-2 p-2'
        type='submit'
      >
        Delete
      </button>
    </form>
  );
}

export default DeleteButton;
