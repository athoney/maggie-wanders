import React from 'react'
import Image from 'next/image';
import { roboto_mono } from "../../fonts";
import Button from '@/app/components/Button';

export default function NotFoundPage() {
  return (
    <div>
        <Image src="/images/taken.png" alt="UFO" width={400} height={300} className='rounded-lg mx-auto' />
        <h1 className={`text-6xl font-bold ${roboto_mono.className} pt-10 mb-10`}>404 - Post not found</h1>
        <Button text="Return Home" link="/"/>

    </div>
  )
}
