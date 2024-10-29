
import prisma from '@/app/lib/db';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

async function getData() {
  const data = await prisma.order.findMany({
    select: {
      amount: true,
      id: true,
      User: {
        select: {
          firstName: true,
          lastName: true,
          profileImage: true,
          email: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 7,
  });

  return data;
}

export default async function RecentSales() {
  const data = await getData();
  return (
    <Card>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-8">
            {
              data?.map((item)=> (
                <div key={item?.id} className="flex items-center gap-4">
              <Avatar className="cursor-pointer hidden sm:flex size-9">
                <AvatarImage src={item?.User?.profileImage} alt="@profile" />
                <AvatarFallback>
                  {item?.User?.firstName?.slice(0, 1).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">
                  {item?.User?.firstName} {item?.User?.lastName}
                </p>
                <p className="text-sm text-muted-foreground">
                  {item?.User?.email}
                </p>
              </div>
              <p className="ml-auto font-medium">
                +${new Intl.NumberFormat('en-US').format(item?.amount / 100)}
                </p>
            </div>
              ))
            }
          </CardContent>
        </Card>
  )
}
