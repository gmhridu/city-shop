"use client"
import { Button } from '@/components/ui/button'
import { DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { BadgeInfo, Contact, Home, LogIn, LogOut, PackageSearch } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const navbarLinks = [
  {
    id: 0,
    name: "Home",
    icon: Home,
    href: "/",
  },
  {
    id: 1,
    name: "Products",
    icon: PackageSearch,
    href: "/products",
  },
  {
    id: 2,
    name: "About",
    icon: BadgeInfo,
    href: "/about",
  },
  {
    id: 3,
    name: "Contact Us",
    icon: Contact,
    href: "/contact",
  }
]

export default function NavbarMobile({user}:any) {
  const pathName = usePathname();
  return (
         <>
          <DropdownMenuLabel>
            Menu
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div className='pt-1'>
          {
            navbarLinks?.map((link, index)=> (
              <DropdownMenuItem key={index} className={cn(
                pathName === link?.href && "bg-[#1d3152] text-white rounded-md", 'space-y-1'
              )}
              asChild
              >
                  <Link
          key={index}
          href={link?.href}
          className='flex gap-1 items-center'
        >
          <link.icon className="size-4"/>
          <span>{link?.name}</span>
        </Link>
              </DropdownMenuItem>
            ))
          }
          </div>
          <DropdownMenuSeparator/>
          {
            user ? (
              <DropdownMenuItem className='mr-1' asChild>
                <LogoutLink>
                  <LogOut className='size-4'/>
                  <span>Sign Out</span>
                </LogoutLink>
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem className='mr-1' asChild>
              <LoginLink>
                <LogIn className='size-4'/>
                <span>Sign In</span>
              </LoginLink>
            </DropdownMenuItem>
            )
          }
         </>
  )
}
