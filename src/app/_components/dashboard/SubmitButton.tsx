"use client"
import { Button } from "@/components/ui/button";
import { Loader2, ShoppingBag } from "lucide-react";
import { useFormStatus } from "react-dom";

interface buttonProps {
  text: string;
  variant?:
  "link" |
  "default" |
  "destructive" |
  "outline" |
  "secondary" |
  "ghost" |
  null |
  undefined
}

export function SubmitButton ({text, variant}: buttonProps) {
    const {pending} = useFormStatus();
  return (
    <>
    {
        pending ? (
            <Button disabled variant={variant}>
                <Loader2 className="mr-2 size-4 animate-spin"/>
                Please Wait
            </Button>
        ) : (
            <Button variant={variant} type="submit" className="">
            {text}
            </Button>
        )
    }
    </>
  )
}

export function ShoppingBagButton () {
  const {pending} = useFormStatus();

  return (
    <>
    {
      pending ? (
        <Button disabled size={'lg'} className="w-full mt-5">
          <Loader2 className="mr-2 size-4 animate-spin"/>
          Please Wait
        </Button>
      ) : (
        <Button size={'lg'} className="w-full mt-5" type="submit">
          <ShoppingBag className="mr-2 size-4"/>
          Add to Cart
        </Button>
      )
    }
    </>
  )
}

export function DeleteButton () {
  const {pending} = useFormStatus();

  return (
    <>
    {
      pending? (
        <Button disabled variant={'ghost'} size={'lg'} className="w-full text-base font-semibold text-primary text-end">
          Removing...
        </Button>
      ) : (
        <Button type="submit" variant={'link'} size={'lg'}
        className="text-base font-semibold text-primary text-end">
          Delete
        </Button>
      )
    }
    </>
  )
}

export function CheckoutButton () {
  const {pending} = useFormStatus();

  return (
    <>
    {
      pending? (
        <Button disabled size={'lg'} className="w-full mt-5">
          <Loader2 className="mr-2 size-4 animate-spin"/>
          Please Wait
        </Button>
      ) : (
        <Button size={'lg'} className="w-full mt-5" type="submit">
          <ShoppingBag className="mr-2 size-4"/>
          Proceed to Checkout
        </Button>
      )
    }
    </>
  )
}
