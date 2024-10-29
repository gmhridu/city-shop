"use client"
import { UploadDropzone } from '@/app/lib/uploadthing';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { ChevronLeft, Trash } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { SubmitButton } from './SubmitButton';
import { useFormState } from 'react-dom';
import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { productSchema } from '@/app/lib/zodSchemas';
import { editProduct } from '@/app/action';
import { categories } from '@/app/lib/categories';
import { type $Enums } from '@prisma/client';

interface editorFormProps {
  data: {
    id: string;
    name: string;
    description: string;
    status: $Enums.ProductStatus;
    price: number;
    images: string[];
    category: $Enums.Category;
    isFeatured: boolean;
    createdAt?: Date;
  }
}

export default function EditForm({data}: editorFormProps) {
  const [images, setImages] = useState<string[]>(data?.images);
  const [lastResult, action] = useFormState(editProduct, undefined);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: productSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const handleDelete = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };
  return (
    <form id={form.id} onSubmit={form.onSubmit} action={action}>
      <Input type='hidden' name='productId' value={data?.id}/>
      <div className="flex items-center gap-4">
        <Button variant={"outline"} size={"icon"} asChild>
          <Link href={"/dashboard/products"}>
            <ChevronLeft className="size-4" />
          </Link>
        </Button>
        <h1 className="text-xl font-semibold tracking-tight">Edit Product</h1>
      </div>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
          <CardDescription>
            In this form you can edit your product
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <Label>Name</Label>
              <Input
                type="text"
                key={fields.name.key}
                name={fields.name.name}
                defaultValue={data?.name}
                className="w-full"
                placeholder="Product Name"
              />
              <p className="text-red-500">{fields.name.errors}</p>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Description</Label>
              <Textarea
                key={fields.description.key}
                name={fields.description.name}
                defaultValue={data?.description}
                placeholder="Write your description right here..."
              />
              <p className="text-red-500">{fields.description.errors}</p>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Price</Label>
              <Input
                key={fields.price.key}
                name={fields.price.name}
                defaultValue={data?.price}
                placeholder="$55"
                type="number"
              />
              <p className="text-red-500">{fields.price.errors}</p>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Featured Product</Label>
              <Switch
                key={fields.isFeatured.key}
                name={fields.isFeatured.name}
                defaultChecked={data?.isFeatured}
              />
              <p className="text-red-500">{fields.isFeatured.errors}</p>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Status</Label>
              <Select
                key={fields.status.key}
                name={fields.status.name}
                defaultValue={data?.status}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft" className="cursor-pointer">Draft</SelectItem>
                  <SelectItem value="published" className="cursor-pointer">Published</SelectItem>
                  <SelectItem value="archived" className="cursor-pointer">Archived</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-red-500">{fields.status.errors}</p>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Category</Label>
              <Select
                key={fields.category.key}
                name={fields.category.name}
                defaultValue={data?.category}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Category"/>
                </SelectTrigger>
                <SelectContent>
                  {categories?.map((category)=> (
                    <SelectItem key={category?.id} value={category.name} className="cursor-pointer">
                      {category.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-red-500">{fields.category.errors}</p>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Images</Label>
              <Input
                type="hidden"
                value={images}
                key={fields.images.key}
                name={fields.images.name}
                defaultValue={fields.images.initialValue as any}
              />
              {images.length > 0 ? (
                <div className="flex gap-5">
                  {images.map((img, index) => (
                    <div className="relative w-[100px] h-[100px]" key={index}>
                      <Image
                        src={img}
                        alt={"@product-image"}
                        loading="lazy"
                        height={100}
                        width={100}
                        className="w-full h-full object-cover rounded-lg border"
                      />
                      <Button
                        onClick={() => handleDelete(index)}
                        variant={"ghost"}
                        size={"icon"}
                        className="absolute -top-3 -right-3 bg-red-500 rounded-full border-2 border-white hover:bg-red-800"
                      >
                        <Trash className="size-4 text-red-200" />
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <UploadDropzone
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    setImages(res.map((r) => r.url));
                  }}
                />
              )}
              <p className="text-red-500">{fields.images.errors}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton text={"Edit Product"}/>
        </CardFooter>
      </Card>
    </form>
  )
}