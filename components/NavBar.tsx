import Link from 'next/link';
import React from 'react';

function NavBar() {
  return (
    <nav className='max-w-3xl mx-auto py-4 flex gap-x-4 border-b-2'>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/counter'>Counter</Link>
      <Link href='/'>Tours</Link>
      <Link href='/'>Actions</Link>
    </nav>
  );
}

export default NavBar;
