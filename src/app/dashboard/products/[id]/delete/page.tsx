import { SubmitButton } from '@/app/_components/dashboard/SubmitButton'
import { removeProduct } from '@/app/action'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

export default function DeleteRoute({params} : {params: {id: string}}) {
  return (
    <div className='h-[80vh] w-full flex items-center justify-center'>
      <Card className='max-w-xl'>
      <CardHeader>
        <CardTitle>
          Are you absolutely sure?
        </CardTitle>
        <CardDescription>
          This action cannot be undone. This will permanently delete this
          and remove all data from server!!
        </CardDescription>
      </CardHeader>
      <CardFooter className="w-full flex justify-end items-center gap-x-3">
        <Button variant={'secondary'} asChild>
          <Link href={'/dashboard/products'}>
          Cancel
          </Link>
        </Button>
        <form action={removeProduct}>
          <Input type='hidden' name='productId' value={params?.id}/>
          <SubmitButton text='Delete' variant={'destructive'}/>
        </form>
      </CardFooter>
      </Card>
    </div>
  )
}
