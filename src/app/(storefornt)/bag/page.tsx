import { CheckoutButton, DeleteButton, ShoppingBagButton } from '@/app/_components/dashboard/SubmitButton';
import { checkOut, deleteCart } from '@/app/action';
import { Cart } from '@/app/lib/interfaces';
import { redis } from '@/app/lib/redis';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { ShoppingBag} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { unstable_noStore as noStore } from "next/cache";

export default async function ShoppingCartBag() {
  noStore();
  const {getUser} = getKindeServerSession();
  const user = await getUser();

  if(!user){
    return redirect('/api/auth/login?')
  };

  const cart: Cart | null = await redis.get(`cart-${user?.id}`);

  let totalPrice = 0;

  cart?.items.forEach((item)=> {
    totalPrice += item.price * item.quantity;
  });

  return (
    <div className='max-w-2xl mx-auto mt-10 min-h-[55vh]'>
      {
        !cart || !cart.items || cart.items.length === 0 ? (
          <div className='flex min-h-[400px] flex-col items-center
          justify-center rounded-lg border border-dashed p-8 text-center
          mt-20'>
            <div className='flex size-20 items-center justify-center
            rounded-full bg-primary/10'>
              <ShoppingBag className='size-10 text-primary'/>
            </div>
            <h2 className='mt-6 text-xl font-semibold'>
              You don't have any products in your bag
              </h2>
              <p className='text-sm mb-8 mt-2 text-center leading-6
              text-muted-foreground max-w-xs mx-auto'>
                You currently don't have any products in your shopping bag.
                Please add some so that you can see them right here.
              </p>
            <Button asChild>
              <Link href={'/'}>
              Return to Shop
              </Link>
            </Button>
          </div>
        ) : (
          <div className='space-y-2'>
          {cart?.items.map((item)=> (
            <Card key={item?.id} className='flex p-1'>
              <CardHeader className='size-24 sm:size-32 relative'>
              <Image
              alt={item?.name}
              src={item?.imageString}
              className='rounded-md object-cover'
              fill
              />
              </CardHeader>
              <CardContent className='flex justify-between mt-2 w-full
              font-medium'>
                <p className='text-lg font-semibold'>{item?.name}</p>
                <div className='flex flex-col h-full justify-between'>
                <div className='flex items-center gap-x-2'>
                  <p className='text-sm font-semibold'>{item?.quantity}</p>
                  <span className='text-sm font-semibold'>X</span>
                  <p className='text-sm font-semibold'>${item?.price}</p>
                </div>
                <form action={deleteCart} className='text-end'>
                <Input type='hidden' name='productId' value={item?.id}/>
                <DeleteButton/>
                </form>
                </div>
              </CardContent>
            </Card>
          ))}
          <Separator />
          <div className='mt-10'>
            <div className='flex items-center justify-between font-medium
            '>
              <p className='text-sm font-semibold'>Subtotal:</p>
              <p className='text-sm font-semibold'>
                ${new Intl.NumberFormat('en-US').format(totalPrice)}</p>
            </div>
            <form action={checkOut}>
            <CheckoutButton/>
            </form>
          </div>
          </div>
        )
      }
    </div>
  )
}
