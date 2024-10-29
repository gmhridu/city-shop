"use client"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const navbarLinks = [
  {
    id: 0,
    name: "Home",
    href: "/",
  },
  {
    id: 1,
    name: "Products",
    href: "/products",
  },
  {
    id: 2,
    name: "About",
    href: "/about",
  },
  {
    id: 3,
    name: "Contact",
    href: "/contact",
  }
]

export  function NavLinks() {
  const pathName = usePathname();
  return (
    <div className="hidden md:flex justify-center items-center gap-x-2 ml-5">
      {
        navbarLinks.map((link, index)=> (
          <Link
          key={index}
          href={link?.href}
          className={cn(
            pathName === link?.href && "bg-[#1d3152] text-white rounded-md"
          )}
        >
          <Button variant={"ghost"}>{link?.name}</Button>
        </Link>
        ))
      }
    </div>
  )
}
