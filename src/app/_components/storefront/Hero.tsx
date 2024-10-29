
import prisma from '@/app/lib/db';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image';
import React from 'react'
import { unstable_noStore as noStore } from "next/cache";

const getData = async () => {
  const data = await prisma.banner.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return data;
}

export default async function Hero() {
  noStore();
  const banners = await getData();
  const isGif = (url: string) => url.toLowerCase().endsWith('.gif');
  return (
    <Carousel>
      <CarouselContent>
      {
        banners?.map((item)=> (
          <CarouselItem key={item?.id}>
            <div className='relative w-full h-[25vh] md:h-[60vh] lg:h-[80vh] rounded'>
              <Image alt='@banner'
               src={item?.imageString}
               fill
               className='object-cover object-center w-full h-full rounded-lg'
               unoptimized={isGif(item?.imageString)}
               />

                {
                  item?.title !== 'Untitled'   && (
                   <div className='absolute top-6 left-6 bg-opacity-75 bg-black
                   text-white p-6 rounded-xl shadow-lg transition-transform hover:scale-105'>
                     <h1
                    className='text-xl lg:text-4xl font-bold text-white text-center'>
                      {item?.title}
                    </h1>
                   </div>
                  )
                }
          </div>
          </CarouselItem>
        ))
      }
      </CarouselContent>
      <CarouselPrevious className='ml-16'/>
      <CarouselNext className='mr-16'/>
    </Carousel>
  )
}
