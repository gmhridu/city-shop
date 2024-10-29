import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Skeleton } from '@/components/ui/skeleton'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { unstable_noStore as noStore } from "next/cache";

interface productProps {
 item: {
  id: string,
  name: string,
  description: string,
  images: string[],
  price: number,
 }
}
export default async function ProductCard({item}:productProps) {
  noStore();
  const {getUser} = getKindeServerSession();
  const user = await getUser();

  return (
    <div className='rounded-lg'>
      <Carousel className='w-full mx-auto'>
        <CarouselContent>
          {
            item?.images.map((item, index)=> (
              <CarouselItem key={index}>
                <div className='relative h-[330px] border rounded-lg'>
                <Image
                alt='@product'
                src={item}
                fill
                className='object-cover object-center w-full h-full
                rounded-lg'
                />
                </div>
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious className='ml-16'/>
        <CarouselNext className='mr-16'/>
      </Carousel>
      <div className='flex justify-between items-center mt-2'>
          <h1 className='font-semibold text-xl'>{item?.name}</h1>
          <h3 className='inline-flex items-center rounded-md
          bg-primary/15 px-2 py-1 text-xs font-medium text-primary
          ring-1 ring-inset ring-primary/15'>${item?.price}</h3>
      </div>
      <p className='text-muted-foreground text-sm mt-2 line-clamp-2'>
        {item?.description}
        </p>
        <Button className='mt-5 w-full' asChild>
          <Link href={!user ?
            '/api/auth/login?'
            : `/products/${item?.id}` }>
          Learn More!
          </Link>
        </Button>
    </div>
  )
}


export function LoadingProductCard(){
  return (
    <div className='flex flex-col'>
      <Skeleton className='w-full h-[330px]'/>
      <div className='flex flex-col mt-2 gap-y-2'>
        <Skeleton className='h-4 w-full'/>
        <Skeleton className='h-6 w-full'/>
      </div>
      <Skeleton className='h-10 w-full mt-5'/>
    </div>
  )
}
