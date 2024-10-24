"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Orders",
    href: "/dashboard/orders",
  },
  {
    name: "Products",
    href: "/dashboard/products",
  },
  {
    name: "Categories",
    href: "/dashboard/categories",
  },
];

export default function DashboardNavigation() {
  const pathName = usePathname();
  return (
    <>
      <div className="mr-2">
        <Link href={"/dashboard"}>
          <Image
            src={"/logo-black.png"}
            alt="@logo"
            title="Tendora"
            width={60}
            height={60}
          />
        </Link>
      </div>
      {links?.map((link, index) => (
        <Link
          key={index}
          href={link?.href}
          className={cn(
            pathName === link?.href && "bg-[#1d3152] text-white rounded-md"
          )}
        >
          <Button variant={"ghost"}>{link?.name}</Button>
        </Link>
      ))}
    </>
  );
}
