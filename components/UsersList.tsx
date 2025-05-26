import React from 'react';
import { fetchUsers } from '@/utils/actions';
import DeleteButton from './DeleteButton';

async function UsersList() {
  const users = await fetchUsers();
  return (
    <div className='mb-b'>
      {users.length ? (
        <div>
          {users.map((user) => {
            return (
              <h4
                key={user.id}
                className=' flex justify-between  font-normal mb-2 text-base'
              >
                {user.firstName} {user.lastName}
                <DeleteButton id={user.id} />
              </h4>
            );
          })}
        </div>
      ) : (
        <h4>there is no user</h4>
      )}
    </div>
  );
}

export default UsersList;
