import Link from 'next/link';
import React from 'react';

function HomePage() {
  return (
    <div>
      <h2 className='text-7xl text-amber-500'>HomePage</h2>
      <Link href='/about' className='text-3xl inline-block text-emerald-600'>
        about
      </Link>
      <p className='text-xl'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
        molestias repellendus, ipsam impedit iste velit eum cupiditate ab
        eligendi quaerat.
      </p>
    </div>
  );
}

export default HomePage;
