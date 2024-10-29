import prisma from '@/app/lib/db'
import React, { Suspense } from 'react'
import ProductCard, { LoadingProductCard } from './ProductCard';

async function getData(){
  const data = await prisma.product.findMany({
    where: {
      status: 'published',
      isFeatured: true
    },
    select: {
      id: true,
      name: true,
      description: true,
      images: true,
      price: true,
    },
    orderBy: {
      createAt: 'desc',
    },
    take: 4,
  });
  return data;
}
export default function FeatureProducts() {
  return (
    <>
    <div className='my-5'>
    <h2 className='text-2xl font-extrabold tracking-tight'>
      Featured Items
    </h2>
    <Suspense fallback={<LoadingRows/>}>
    <LoadFeatureProducts/>
    </Suspense>
    </div>
    </>
  )
}

async function LoadFeatureProducts () {
  const products = await getData()
  return (
    <div className='mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
    {products?.map((item)=> (
      <ProductCard key={item?.id} item={item}/>
    ))}
    </div>
  )
}

function LoadingRows() {
  return (
    <div className='mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
     <LoadingProductCard/>
     <LoadingProductCard/>
     <LoadingProductCard/>
     <LoadingProductCard/>
    </div>
  )
}
