import React from 'react'
import Image from 'next/image';
import { roboto_mono } from "../fonts";
import Link from 'next/link';

export default function Card({ id, title, date }) {
    const background = `/images/post${id}-sm.webp`

    return (
        <div className='mb-5 md:mb-0'>
            <Link href={`/post/${id}`}>

                <Image src={background} alt="Passport" width={500} height={300} className='mx-auto h-60 sm:h-96 w-full' style={{ objectFit: "cover" }} />
                <h1 className={`text-start font-bold text-2xl pt-3 ${roboto_mono.className}`}>{title}</h1>
                <p className='text-start text-slate-500'>{date}</p>
            </Link>
        </div>
    )
}
