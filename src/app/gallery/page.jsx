"use client";
import React, { Suspense } from 'react'
import { roboto_mono } from '../fonts'
import { Gallery } from "react-grid-gallery";
import { images } from "@/app/components/images";
import Button from "@/app/components/Button";
import "../gallery.css"
import Image from 'next/image';

// lazy load image component
const LazyImage = (props) => {
    return (
        <Image src={props.imageProps.src} width={props.imageProps.style.width} height={props.imageProps.style.height} {...props.imageProps} quality={60} loading='lazy'/>
    )
}

export default function page() {

    return (
        <div className=''>
            <div className="bg-primary pt-8 sm:pt-0 h-36 md:h-36 flex flex-col mb-0 sm:mb-8">

                <h1 className={`text-6xl font-bold  ${roboto_mono.className}`}>Gallery</h1>
            </div>
            <div className='w-100 md:w-5/6 mx-auto'>
                <div className='hidden md:block'>
                    <Suspense fallback={<div>Loading...</div>} >
                        <Gallery images={images} thumbnailImageComponent={LazyImage} enableImageSelection={false} rowHeight={400} margin={4} />
                    </Suspense>
                </div>
                <div className='block md:hidden'>
                    <Suspense fallback={<div>Loading...</div>} >
                        <Gallery images={images} thumbnailImageComponent={LazyImage} enableImageSelection={false} rowHeight={200} margin={4} />
                    </Suspense>
                </div>
                <div className='pt-10'>
                    <Button text="Return Home" link="/" />
                </div>
            </div >
        </div>
    )
}
