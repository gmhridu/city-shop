"use client"
import { SubmitButton } from '@/app/_components/dashboard/SubmitButton'
import { createBanner } from '@/app/action'
import { UploadDropzone } from '@/app/lib/uploadthing'
import { bannerSchema } from '@/app/lib/zodSchemas'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import { ChevronLeft, Trash } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useFormState } from 'react-dom'

export default function BannerCreate() {
  const [image, setImage] = useState<string | undefined>(undefined);

  const [lastResult, action] = useFormState(createBanner, undefined);

  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: bannerSchema });
    },
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  });

  const handleDelete = () => {
    setImage(undefined);
  };
  return (
    <form id={form.id} onSubmit={form.onSubmit} action={action}>
      <div className='flex items-center gap-x-4'>
        <Button variant={'outline'} size={'icon'} asChild>
        <Link href={'/dashboard/banner'}>
        <ChevronLeft className='size-4'/>
        </Link>
        </Button>
        <h1 className='text-xl font-semibold tracking-tight'>New Banner</h1>
      </div>

      <Card className='mt-5'>
        <CardHeader>
          <CardTitle>
            Banner Details
          </CardTitle>
          <CardDescription>
            Create your banner right here
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col gap-y-6'>
            <div className='flex flex-col gap-3'>
            <Label>Name</Label>
            <Input
            name={fields.title.name}
            key={fields.title.key}
            defaultValue={fields.title.initialValue}
            type='text'
            placeholder='Create title for Banner (Optional)'/>
            <p className='text-red-500'>{fields.title.errors}</p>
            </div>
            <div className='flex flex-col gap-3'>
            <Label>Image</Label>
            <Input type='hidden'
            value={image}
            key={fields.imageString.key}
            name={fields.imageString.name}
            defaultValue={fields.imageString.initialValue as any}
            />
            {
              image !== undefined ? (
                <div className="relative w-[100px] h-[100px]">
                <Image
                  src={image}
                  alt={"@product-image"}
                  loading="lazy"
                  height={100}
                  width={100}
                  className="w-full h-full object-cover rounded-lg border"
                />
                <Button
                  onClick={() => handleDelete()}
                  variant={"ghost"}
                  size={"icon"}
                  className="absolute -top-3 -right-3 bg-red-500 rounded-full border-2 border-white hover:bg-red-800"
                >
                  <Trash className="size-4 text-red-200" />
                </Button>
              </div>
              ) : (
                <UploadDropzone endpoint='bannerImageRoute'
            onClientUploadComplete={(res)=> {
              setImage(res[0].url);
            }}
            onUploadError={()=> {
              console.log('Error uploading image');
            }}
            />
              )
            }
            <p className='text-red-500'>{fields.imageString.errors}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton text='Create Banner' />
        </CardFooter>
      </Card>
    </form>
  )
}
