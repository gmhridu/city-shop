"use client"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const menuItems = [
  {
    id: "1",
    label: "Home",
    path: '/'
  },
  {
    id: "2",
    label: "Shop",
    path: '/shop/home'
  },
  {
    id: "3",
    label: "About",
    path: '/about'
  },
  {
    id: "4",
    label: "Contact",
    path: '/contact'
  }
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="mx-4 my-3">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <Button variant={"ghost"} className="flex items-center gap-2">
            <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
            <h4 className="text-xl font-bold">Sinp</h4>
          </Button>
        </Link>
        <div className="hidden sm:block">
          {menuItems?.map((menu, index) => (
            <Link
              href={menu.path}
              key={index}
              className={cn(pathname === menu?.path && "text-orange-500")}
            >
              <Button
                variant={"ghost"}
                className="hover:bg-orange-500 hover:text-white"
              >
                {menu.label}
              </Button>
            </Link>
          ))}
        </div>
        <div className="flex gap-2">
          <Button variant={"default"} className="text-sm">
            Sign In
          </Button>
          <Button variant={"outline"} className="text-sm">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
}
