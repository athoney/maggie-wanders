"use client";
import React, { Suspense } from 'react'
import { roboto_mono } from '../fonts'
import { Gallery } from "react-grid-gallery";
import { images } from "@/app/components/images";
import Button from "@/app/components/Button";
import "@/app/gallery.css"

export default function page() {

    return (
        <div>
            <h1 className={`text-6xl font-bold my-10 ${roboto_mono.className}`}>Gallery</h1>
            <Suspense fallback={<div>Loading...</div>} >
                <Gallery images={images} enableImageSelection={false} rowHeight={400} margin={4} />
            </Suspense>

            <div className='pt-10'>
                <Button text="Return Home" link="/" />
            </div>
        </div >
    )
}
