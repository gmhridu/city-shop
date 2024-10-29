import ProductCard from '@/app/_components/storefront/ProductCard';
import prisma from '@/app/lib/db'
import { notFound } from 'next/navigation';
import React from 'react'
import { unstable_noStore as noStore } from "next/cache";

async function getData(){
  const data = await prisma.product.findMany({
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
  });
  if(!data){
    return notFound();
  }

  return data;
}

export default async function Products() {
  noStore();
  const products = await getData();
  return (
    <section>
      <h1 className='font-semibold text-3xl my-5'>
        All Products
      </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {
        products?.map((item)=> (
          <ProductCard key={item?.id} item={item}/>
        ))
      }
      </div>
    </section>
  )
}
