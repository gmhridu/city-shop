import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import RecentSales from "../_components/dashboard/RecentSales";
import Chart from "../_components/dashboard/Chart";
import prisma from "../lib/db";
import { unstable_noStore as noStore } from "next/cache";
import DashboardStats from "../_components/dashboard/DashboardStats";

async function getData () {
  const now  = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(now.getDate() - 7);

  const data = await prisma.order.findMany({
    where: {
      createdAt: {
        gte: sevenDaysAgo,
      }
    },
    select: {
      amount: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: 'asc'
    }
  });
  const result = data.map((item)=> ({
    date: new Intl.DateTimeFormat('en-US').format(item.createdAt),
    revenue: item.amount / 100,
  }));
  return result;
}

export default async function Dashboard() {
  noStore();
  const data = await getData();
  return (
    <>
      <DashboardStats/>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
            <CardDescription>
              Recent Transaction from your store
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Chart data={data}/>
          </CardContent>
        </Card>
        <RecentSales />
      </div>
    </>
  );
}
