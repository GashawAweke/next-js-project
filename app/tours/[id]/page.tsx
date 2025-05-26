import React from 'react';
import mapsImg from '@/images/map.jpg';
import Image from 'next/image';
const remoteImgUrl = 'https://www.course-api.com/images/tours/tour-1.jpeg';

function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1 className='text-4xl'>ID: {params.id}</h1>
      <section className='flex gap-x-4 mt-4'>
        <div>
          <Image
            src={mapsImg}
            alt='maps'
            className='w-48 h-48 rounded object-cover'
            priority
            width={192}
            height={192}
          />
          <p className='text-sm text-lime-500'>local image: maps image</p>
        </div>
        <div>
          {' '}
          <Image
            src={remoteImgUrl}
            alt='tour'
            className='w-48 h-48 rounded object-cover'
            width={192}
            height={192}
            priority
          />
          <p className='text-sm text-lime-500'>remote image: tour</p>
        </div>
      </section>
    </div>
  );
}

export default page;
