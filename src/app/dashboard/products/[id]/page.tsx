import EditForm from '@/app/_components/dashboard/EditForm';
import prisma from '@/app/lib/db'
import { Card } from '@/components/ui/card'
import { notFound } from 'next/navigation';
import React from 'react'

async function getData (productId: string) {
  const data = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });
  if(!data){
    return notFound()
  }
  return data;
}

export default async function EditRoute(
  {params,
  }:
  {params : {id: string}}) {
const data = await getData(params?.id);
// console.log(data);
  return (
    <>
      <EditForm data={data}/>
    </>
  )
}
