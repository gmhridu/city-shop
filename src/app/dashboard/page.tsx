import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { DollarSign, PartyPopper, ShoppingBag, User2 } from "lucide-react";
import React from "react";

export default async function Dashboard() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Revenue</CardTitle>
            <DollarSign className="size-4 text-green-500" />
          </CardHeader>
          <CardContent className="transition-all shadow cursor-pointer">
            <p className="text-2xl font-bold">$12,345</p>
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
            <p className="text-2xl font-bold">+50</p>
            <p className="text-xs text-muted-foreground">Total Sales</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Products</CardTitle>
            <PartyPopper className="size-4 text-indigo-500" />
          </CardHeader>
          <CardContent className="transition-all shadow cursor-pointer">
            <p className="text-2xl font-bold">38</p>
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
            <p className="text-2xl font-bold">120</p>
            <p className="text-xs text-muted-foreground">
              Total Users Signed Up
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
            <CardDescription>
              Recent Transaction from your store
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <Avatar className="cursor-pointer hidden sm:flex size-9">
                <AvatarImage src={user?.picture as string} alt="@profile" />
                <AvatarFallback>
                  {user?.given_name?.slice(0, 1).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">
                  {user?.given_name} {user?.family_name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {user?.email as string}
                </p>
              </div>
              <p className="ml-auto font-medium">+$1,999.00</p>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="cursor-pointer hidden sm:flex size-9">
                <AvatarImage src={user?.picture as string} alt="@profile" />
                <AvatarFallback>
                  {user?.given_name?.slice(0, 1).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">
                  {user?.given_name} {user?.family_name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {user?.email as string}
                </p>
              </div>
              <p className="ml-auto font-medium">+$1,999.00</p>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="cursor-pointer hidden sm:flex size-9">
                <AvatarImage src={user?.picture as string} alt="@profile" />
                <AvatarFallback>
                  {user?.given_name?.slice(0, 1).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">
                  {user?.given_name} {user?.family_name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {user?.email as string}
                </p>
              </div>
              <p className="ml-auto font-medium">+$1,999.00</p>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="cursor-pointer hidden sm:flex size-9">
                <AvatarImage src={user?.picture as string} alt="@profile" />
                <AvatarFallback>
                  {user?.given_name?.slice(0, 1).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">
                  {user?.given_name} {user?.family_name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {user?.email as string}
                </p>
              </div>
              <p className="ml-auto font-medium">+$1,999.00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
