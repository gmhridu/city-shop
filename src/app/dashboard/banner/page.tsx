import prisma from '@/app/lib/db'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { DeleteIcon, Edit2, MoreHorizontal, PlusCircle, User2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function getData () {
  const data = await prisma.banner.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return data;
}

export default async function BannerRoute() {
  const data = await getData();

  const isGif = (url: string) => url.toLowerCase().endsWith('.gif');
  return (
    <>
    <div className='flex items-center justify-end'>
    <Button className='flex gap-x-2' asChild>
      <Link href={'/dashboard/banner/create'}>
        <PlusCircle className='size-5'/>
        <span>Add Banner</span>
      </Link>
    </Button>
    </div>

    <Card className='mt-5'>
      <CardHeader>
        <CardTitle>
          Banners
        </CardTitle>
        <CardDescription>
          Manage your banners and view their status
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className='text-end'>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              data?.map((item)=> (
                <TableRow key={item?.id}>
            <TableCell>
              <Image
              src={item?.imageString}
              alt='Product Image'
              width={64}
              height={64}
              className='object-cover h-16 w-16 rounded-lg'
              unoptimized={isGif(item?.imageString)}
              />
            </TableCell>
            <TableCell className='font-medium'>
              {item?.title}
            </TableCell>
            <TableCell className='text-end'>
            <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant={"secondary"} size={"icon"}>
                        <MoreHorizontal className="size-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="cursor-pointer text-red-500 hover:bg-red-600 hover:text-white" asChild>
                        <Link href={`/dashboard/banner/${item?.id}/delete`}>
                        <DeleteIcon className="size-3" />
                        <span>Delete</span></Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
            </TableCell>
            </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </CardContent>
    </Card>
    </>
  )
}
