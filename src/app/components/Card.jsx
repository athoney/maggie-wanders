import React from 'react'
import Image from 'next/image';
import { roboto_mono } from "@/app/fonts";
import Link from 'next/link';

export default function Card({ id, title, date }) {
    const background = `/images/post${id}.png`

    return (
        <div className='mb-5 md:mb-0'>
            <Link href={`/post/${id}`}>
                <div style={{
                    backgroundImage: `url(${background})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '400px',
                }}
                    alt="Passport"
                    className='rounded-t-lg mx-auto' >
                </div>
                <h1 className={`text-start font-bold text-2xl pt-3 ${roboto_mono.className}`}>{title}</h1>
                <p className='text-start text-slate-500'>{date}</p>
            </Link>
        </div>
    )
}
