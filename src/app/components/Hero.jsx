import React from 'react'
import { raleway, roboto_mono } from "@/app/fonts";
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import FeaturedCard from './FeaturedCard';
import { posts } from '@/app/data';


export default async function Hero() {
    const featured_post = posts[1];
    return (
        <div className=''>
            {/* <h1 className={`text-5xl md:text-8xl font-bold ${roboto_mono.className} py-3 md:py-10`}>Maggie Wanders</h1> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-end md:gap-10 md:pt-10">
                <div className='md:col-span-1 mx-auto'>
                    {/* <p className='text-lg xl:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu venenatis dolor. Sed ac vehicula sem, in gravida magna. Nulla dignissim eget dolor quis semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus feugiat sodales. Donec pulvinar sagittis arcu, in aliquam sapien bibendum vel. Nullam sagittis risus maximus ligula volutpat tempor. Donec libero orci, interdum sed</p>
                        <br />
                        <Button text="Meet the Author" link="/about" /> */}
                    {/* <div className='mx-auto'> */}

                        <Link className={`block font-bold ${roboto_mono.className}`} href="/about">
                            <Image src="/images/magdelana-sq.png" alt="Koala" width={350} height={350} className='rounded-full mx-auto ' />
                            <button className="bg-primary text-white rounded-lg px-4 py-2 mt-5">Meet the Author</button>
                        </Link>
                    {/* </div> */}
                </div>
                <div className='md:col-span-2 xs:mx-auto mt-10 md:mt-0'>
                    <FeaturedCard id={featured_post.id} title={featured_post.title} quote={featured_post.quote} date={featured_post.date}/>
                </div>
            </div>
        </div>
    )
}
