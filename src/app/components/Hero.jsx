import React from 'react'
import { raleway, roboto_mono } from "@/app/fonts";
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import FeaturedCard from './FeaturedCard';
import { promises as fs } from 'fs';


export default async function Hero() {
    const file = await fs.readFile(process.cwd() + '/src/app/data.json', 'utf8');
    const data = JSON.parse(file);
    const featured_post = data.posts[1];
    return (
        <div className=''>
            <Image src="/images/maggie-wanders.png" alt="Koala" width={900} height={300} className='rounded-lg mx-auto my-8'/>
            {/* <h1 className={`text-5xl md:text-8xl font-bold ${roboto_mono.className} py-3 md:py-10`}>Maggie Wanders</h1> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-end md:gap-4 md:mt-10">
                <div className='col-span-1 mx-auto lg:ml-0'>
                    {/* <p className='text-lg xl:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu venenatis dolor. Sed ac vehicula sem, in gravida magna. Nulla dignissim eget dolor quis semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus feugiat sodales. Donec pulvinar sagittis arcu, in aliquam sapien bibendum vel. Nullam sagittis risus maximus ligula volutpat tempor. Donec libero orci, interdum sed</p>
                        <br />
                        <Button text="Meet the Author" link="/about" /> */}
                    <p className='text-left font-bold text-2xl mt-5 md:mt-0'>Meet the Author</p>

                    <Link className={`block rounded-lg hover:bg-primary text-white font-bold ${roboto_mono.className}`} href="/about">
                        <div className='hover:opacity-55'>
                            <Image src="/images/magdelana-sq.png" alt="Koala" width={450} height={300} className='rounded-lg mx-auto ' />
                        </div>

                    </Link>
                </div>
                <div className='col-span-2 xs:mx-auto mt-10 md:mt-0'>
                    <p className='text-left font-bold text-2xl'>Featured</p>
                    <FeaturedCard id={featured_post.id} title={featured_post.title} quote={featured_post.quote} />
                </div>
            </div>
        </div>
    )
}
