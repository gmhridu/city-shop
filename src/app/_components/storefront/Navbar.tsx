import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { getKindeServerSession, LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/server'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { LogIn, LogOut, Menu, Settings, ShoppingBag } from 'lucide-react'
import { NavLinks } from './NavLinks'
import NavbarMobile from './NavbarMobile'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { redis } from '@/app/lib/redis'
import { Cart } from '@/app/lib/interfaces'
import { unstable_noStore as noStore } from "next/cache";

 const navbarLinks = [
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

export default async function Navbar() {
  noStore();
  const {getUser} = getKindeServerSession();
  const user = await getUser();

  const cart: Cart | null = await redis.get(`cart-${user?.id}`);

  const total = cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;

  return (
    <nav className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between'>
      <DropdownMenu>
        <DropdownMenuTrigger className='block md:hidden' asChild>
          <Button variant={'secondary'} size={'icon'} className='border'>
            <Menu className='size-5 text-center'/>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56' align='start'>
          <NavbarMobile user={user}/>
        </DropdownMenuContent>
        </DropdownMenu>
        <div className='block md:hidden'>
          <Link href={'/'}>
          <Image
          src={'/logo-no-background.png'}
          alt={"@Logo"}
          width={60}
          height={60}
          />
          </Link>
        </div>
      <div className='hidden md:flex items-center gap-8'>
        <Button variant={'ghost'} className='px-8 py-2' asChild>
          <Link href={'/'}>
          <Image
          src={'/logo-no-background.png'}
          alt={"@Logo"}
          width={60}
          height={60}
          />
          </Link>
        </Button>
      <NavLinks/>
      </div>
      {
        user ? (
           <div className='flex items-center'>
            <div>
              <Link href={'/bag'}
              className='group p-2 flex items-center mr-2 relative'>
                <ShoppingBag
                className='size-6 group-hover:text-gray-500'/>
                <span
                className='bg-blue-500 text-white text-xs rounded-full size-5
                 inline-flex items-center justify-center absolute -right-1 -top-1'>{total}</span>
              </Link>
            </div>

            <div>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className='border-2 cursor-pointer size-10'>
                <AvatarImage
                src={user?.picture as string}
                alt={user?.given_name as string}
                className='cursor-pointer'
                />
                <AvatarFallback className='cursor-pointer'>
                  {user?.given_name?.slice(0, 1).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
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
            </div>
           </div>
        ) : (
          <>
           <Button asChild>
            <LoginLink>
              <LogIn/>
              Sign In
            </LoginLink>
          </Button>
          </>
        )
      }
    </nav>
  )
}
