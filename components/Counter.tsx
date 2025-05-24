'use client';

import React, { useState } from 'react';

function Counter() {
  const [count, setCoount] = useState(0);
  return (
    <div className='flex flex-col items-center w-[100px]'>
      <p className='text-5xl font-normal'>{count}</p>
      <button
        className='bg-lime-500 rounded-md text-white px-4 py-2 mt-4'
        onClick={() => setCoount(count + 1)}
      >
        Increase
      </button>
    </div>
  );
}

export default Counter;
