import { NextRequest, NextResponse } from 'next/server';
import { fetchUsers, saveUsers } from '@/utils/actions';

// /api/users
export const GET = async (req) => {
  console.log(req.nextUrl);
  console.log(req.url);
  console.log(req.nextUrl.pathname);
  console.log(req.nextUrl.searchParams);
  console.log(req.nextUrl.searchParams.get('token'));
  console.log(req.headers);
  console.log(req.headers.get('user-agent'));
  console.log(req.cookies.get('myCookie')?.value);
  console.log(req.method);

  const users = await fetchUsers();
  return Response.json({ users });
};

export const POST = async (req: Request) => {
  const user = await req.json();
  const newUser = { ...user, id: Date.now().toString() };
  await saveUsers(newUser);
  return Response.json({ msg: 'user created' });
};
