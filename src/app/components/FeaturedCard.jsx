import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { roboto_mono } from '../fonts';

export default function FeaturedCard({ id, title, quote, date }) {
    const background = `/images/post${id}.png`
    return (
        <div className=''>
            <Link href={`/post/${id}`}>
                <div className='grid grid-cols-2 lg:gap-10'>
                    {/* <Image src="/images/featured.png" alt="Passport" width={300} height={400} className='rounded-t-lg' /> */}
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
                    <div className='text-start'>
                        <h1 className={` font-bold text-5xl pt-3 ${roboto_mono.className}`}>{title}</h1>
                        <p className='text-slate-500 mb-8'>{date}</p>
                        <p className='text-3xl'>{quote}...</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
