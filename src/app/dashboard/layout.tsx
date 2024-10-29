import React from "react";
import DashboardNavigation from "../_components/dashboard/DashboardNavigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CircleUser, LogOut, MenuIcon, Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";

import { redirect } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
type DashboardLayoutProps = {
  children: React.ReactNode;
};


export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();



  return (
    <div className="flex flex-col mx-auto  px-4 sm:px-6 lg:px-8">
      <header className="sticky border-b h-16 top-0 flex items-center justify-between gap-4 bg-white">
        <nav className="hidden font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <DashboardNavigation />
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant={"outline"}
              size={"icon"}
              className="shrink-0 md:hidden"
            >
              <MenuIcon className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"}>
            {
              <nav className="flex flex-col gap-6 text-lg font-medium mt-5">
                <DashboardNavigation />
              </nav>
            }
          </SheetContent>
        </Sheet>
        <TooltipProvider>
          <Tooltip>
            <DropdownMenu>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  {user ? (
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src={user?.picture as string}
                        alt="@profile"
                      />
                      <AvatarFallback>
                        {user?.given_name?.slice(0, 1).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  ) : (
                    <Button
                      variant={"secondary"}
                      size={"icon"}
                      className="rounded-full size-10 border cursor-pointer"
                    >
                      <CircleUser className="size-8" />
                    </Button>
                  )}
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {user?.given_name} {user?.family_name}
                </p>
              </TooltipContent>
              <DropdownMenuContent align='end' className='w-64' forceMount>
              <DropdownMenuLabel className='inline-flex flex-col'>
                {user?.given_name} {user?.family_name}
              <span className='text-sm text-muted-foreground font-medium'>
                {user?.email}
              </span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem className='cursor-pointer'>
                  <Settings/>
                  Account Settings
                </DropdownMenuItem>
                <DropdownMenuItem className='cursor-pointer' asChild>
                  <LogoutLink>
                  <LogOut/>
                  Logout
                  </LogoutLink>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
            </DropdownMenu>
          </Tooltip>
        </TooltipProvider>
      </header>
      <main className="my-5">{children}</main>
    </div>
  );
}
