import prisma from '@/app/lib/db'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign, PartyPopper, ShoppingBag, User2 } from 'lucide-react'
import React from 'react'
import { unstable_noStore as noStore } from "next/cache";

async function getData () {
  const [user, products, orders] = await Promise.all([
    prisma.user.findMany({
      select: {
        id: true,
      }
    }),
    prisma.product.findMany({
      select: {
        id: true,
      }
    }),
    prisma.order.findMany({
      select: {
        amount: true,
      }
    })
  ])

  return {user, products, orders};
}

export default async function DashboardStats() {
  noStore();
  const {user, products, orders} = await getData();

  const totalAmount = orders.reduce((accumulator, currentValue)=> {
    return accumulator + currentValue.amount;
  }, 0)
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Revenue</CardTitle>
            <DollarSign className="size-4 text-green-500" />
          </CardHeader>
          <CardContent className="transition-all shadow cursor-pointer">
            <p className="text-2xl font-bold">
              ${new Intl.NumberFormat('en-US').format(totalAmount / 100)}
              </p>
            <p className="text-xs text-muted-foreground">
              Based on 100 Charges
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Sales</CardTitle>
            <ShoppingBag className="size-4 text-blue-500" />
          </CardHeader>
          <CardContent className="transition-all shadow cursor-pointer">
            <p className="text-2xl font-bold">+{orders?.length}</p>
            <p className="text-xs text-muted-foreground">Total Sales</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Products</CardTitle>
            <PartyPopper className="size-4 text-indigo-500" />
          </CardHeader>
          <CardContent className="transition-all shadow cursor-pointer">
            <p className="text-2xl font-bold">{products?.length}</p>
            <p className="text-xs text-muted-foreground">
              Total Products Created
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Users</CardTitle>
            <User2 className="size-4 text-orange-500" />
          </CardHeader>
          <CardContent className="transition-all shadow cursor-pointer">
            <p className="text-2xl font-bold">{user?.length}</p>
            <p className="text-xs text-muted-foreground">
              Total Users Signed Up
            </p>
          </CardContent>
        </Card>
      </div>
  )
}
