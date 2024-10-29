import { ShoppingBagButton } from '@/app/_components/dashboard/SubmitButton';
import FeatureProducts from '@/app/_components/storefront/FeatureProducts';
import ImageSlider from '@/app/_components/storefront/ImageSlider';
import { addItem } from '@/app/action';
import prisma from '@/app/lib/db'
import { StarIcon } from 'lucide-react';
import { notFound } from 'next/navigation';
import React from 'react'

async function getData (productId: string) {
  const data = prisma.product.findUnique({
    where: {
      id: productId,
    },
    select: {
      name: true,
      price: true,
      images: true,
      description: true,
      id: true,
    },
  });
  if(!data){
    return notFound();
  };
  return data;
}

export default async function ProductIdRoute({params}: {params:{id: string}}) {
  const data = await getData(params.id);


  const addProductToShoppingCart = addItem.bind(null, data?.id as string)
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6
    items-start lg:gap-x-24 py-6'>
      <ImageSlider images={data?.images as string[]}/>
      <div>
        <h1 className='text-xl md:text-3xl font-extrabold tracking-tight
         text-gray-900'>
          {data?.name}
        </h1>
        <p className='text-lg md:text-3xl mt-2 text-gray-900'>
          ${data?.price}
        </p>
        <div className='mt-3 flex items-center gap-1'>
          <StarIcon className='size-4 text-yellow-500 fill-yellow-500'/>
          <StarIcon className='size-4 text-yellow-500 fill-yellow-500'/>
          <StarIcon className='size-4 text-yellow-500 fill-yellow-500'/>
          <StarIcon className='size-4 text-yellow-500 fill-yellow-500'/>
          <StarIcon className='size-4 text-yellow-500 fill-yellow-500'/>
        </div>
        <p className='text-base text-muted-foreground mt-6'>
          {data?.description}
        </p>

        <form action={addProductToShoppingCart}>
        <ShoppingBagButton/>
        </form>
      </div>
    </div>

    <div className='mt-8 md:mt-16'>
      <FeatureProducts/>
    </div>
    </>
  )
}
