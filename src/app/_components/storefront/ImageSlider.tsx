"use client"
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

interface productDetailsProps {
images: string[]
}

export default function ImageSlider({images}:productDetailsProps) {
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const handlePrevClick = () => {
    setMainImageIndex((prevIndex)=> (
      prevIndex === 0? images.length - 1 : prevIndex - 1
    ));
  };

  const handleNextClick = () => {
    setMainImageIndex((prevIndex)=> (
      prevIndex === images.length - 1? 0 : prevIndex + 1
    ));
  };

  const handleImageClick = (index: number) => {
    setMainImageIndex(index);
  };
  return (
    <div className='grid gap-6 md:gap-3 items-start'>
      <div className='relative overflow-hidden rounded-lg'>
        <Image
        src={images[mainImageIndex]}
        alt='@Product Details'
        width={600}
        height={600}
        className='object-cover md:w-[600px] md:h-[600px]'
        />
        <div className='absolute inset-0 flex items-center justify-between
        px-4'>
          <Button
          onClick={handlePrevClick}
          variant={'secondary'} size={'icon'} className='border'>
            <ChevronLeft className='size-6'/>
          </Button>
          <Button
          onClick={handleNextClick}
          variant={'secondary'} size={'icon'} className='border'>
            <ChevronRight className='size-6'/>
          </Button>
        </div>
      </div>
      <div className='grid grid-cols-5 gap-4'>
        {
          images?.map((image, index)=> (
            <div key={index} onClick={()=> handleImageClick(index)}
            className={cn(index === mainImageIndex ?
            'border-2 border-primary'
            : 'border border-gray-200',
            'relative overflow-hidden rounded-lg cursor-pointer')}>
              <Image
              src={image}
              alt='Product Image'
              width={100}
              height={100}
              className='object-cover md:w-[100px] md:h-[100px]'
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}
