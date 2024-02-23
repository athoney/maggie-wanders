import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { roboto_mono } from '../fonts';

export default function FeaturedCard({ id, title, quote }) {
    const background = `/images/post${id}.png`
    return (
        <div className=''>
            <Link href={`/post/${id}`}>
                <Image src="/images/featured.png" alt="Passport" width={1000} height={100} className='rounded-t-lg' />
                {/* <div style={{
                    backgroundImage: `url(${background})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '1000px',
                    height: '1000px',
                }}
                    alt="Passport"
                    className='rounded-t-lg' >
                </div> */}
                <h1 className={`text-center font-bold text-2xl pt-3 ${roboto_mono.className}`}>{title}</h1>
                <p className='text-center text-2xl'>&quot{quote}&quot</p>
            </Link>
        </div>
    )
}
