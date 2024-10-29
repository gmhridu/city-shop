import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import square from '/public/square.jpeg';
import round from '/public/round.jpeg';
import multi from '/public/mutli-color.jpeg';


export default function () {
  return (
    <div className='py-8 sm:py-24'>
      <div className='flex justify-between items-center'>
        <h2 className='text-lg sm:text-2xl font-extrabold tracking-tight'>
          Shop by Category
        </h2>

        <Link
        href={'/products'}
        className='text-sm font-medium sm:font-semibold text-primary hover:text-primary/80'>
          Browse All Products &rarr;
        </Link>
      </div>
      <div className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2
      sm:grid-rows-2 sm:gap-x-6 lg:gap-8'>
      <div className='group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden
      sm:aspect-w-1 sm:row-span-2'>
        <Image
        alt='Square'
        src={square}
        loading='lazy'
        className='object-cover object-center'
        fill
        />
        <div
        className='bg-gradient-to-b from-transparent to-black opacity-55'/>
        <div className='p-6 flex items-end'>
          <Link href={'/products'}>
            <h3 className='text-white font-semibold'>Square Doormats</h3>
            <p className='mt-1 text-sm text-white'>Shop Now</p>
          </Link>
        </div>
      </div>

      <div className='group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden
      sm:relative sm:aspect-none sm:h-full
      '>
        <Image
        alt='Round'
        src={round}
        loading='lazy'
        className='object-bottom object-cover sm:absolute sm:inset-0 sm:w-full
        sm:h-full
        '
        fill
        />
        <div
        className='bg-gradient-to-b from-transparent to-black opacity-55
        sm:absolute sm:inset-0
        '/>
        <div className='p-6 flex items-end sm:absolute sm:inset-0'>
          <Link href={'/products'}>
            <h3 className='text-white font-semibold'>Round Doormats</h3>
            <p className='mt-1 text-sm text-white'>Shop Now</p>
          </Link>
        </div>
      </div>

      <div className='group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden
      sm:relative sm:aspect-none sm:h-full
      '>
        <Image
        alt='Multi'
        src={multi}
        loading='lazy'
        className='object-bottom object-cover sm:absolute sm:inset-0 sm:w-full
        sm:h-full
        '
        fill
        />
        <div
        className='bg-gradient-to-b from-transparent to-black opacity-55
        sm:absolute sm:inset-0
        '/>
        <div className='p-6 flex items-end sm:absolute sm:inset-0'>
          <Link href={'/products'}>
            <h3 className='text-white font-semibold'>Multi Color Doormats</h3>
            <p className='mt-1 text-sm text-white'>Shop Now</p>
          </Link>
        </div>
      </div>
      </div>
    </div>
  )
}
