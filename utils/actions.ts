'use server';

import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { revalidatePath } from 'next/cache';
const usersFile = path.join(process.cwd(), 'users.json');

type User = {
  id: string;
  firstName: string;
  lastName: string;
};

export const createUser = async (prevState: any, formData: FormData) => {
  console.log(prevState);

  await new Promise((resolve) => setTimeout(resolve, 3000));
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;

  const newUser: User = { firstName, lastName, id: Date.now().toString() };

  try {
    await saveUsers(newUser);
    revalidatePath('/actions');
    return 'user created successfully...';
  } catch (error) {
    console.error(error);
    return 'failed to create user...';
  }
};

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const result = await readFile('users.json', { encoding: 'utf8' });
    const users = result ? JSON.parse(result) : [];
    return users;
  } catch (err: any) {
    if (err.code === 'ENOENT') return [];
    throw err;
  }
};

export const deleteUser = async (formData: FormData) => {
  const id = formData.get('id') as string;
  const users = await fetchUsers();
  const updatedUsers = users.filter((user) => user.id !== id);

  await writeFile('users.json', JSON.stringify(updatedUsers));
  revalidatePath('/actions');
};

export const removeUser = async (id: string, formData: FormData) => {
  const users = await fetchUsers();
  const updatedUsers = users.filter((user) => user.id !== id);
  await writeFile('users.json', JSON.stringify(updatedUsers));
  revalidatePath('/actions');
};

export const saveUsers = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);

  await writeFile('users.json', JSON.stringify(users));
};
