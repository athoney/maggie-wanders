import React from 'react'
import { roboto_mono } from "@/app/fonts";
import Image from 'next/image';

export default function HeroAbout() {
  return (
    <div className='mt-10 lg:px-20'>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 mx-auto">
        <div className="flex mx-auto lg:col-span-1">
          <Image src="/images/magdelana-sq.png" alt="Magdelana Moseley" width={500} height={200} className="rounded-lg object-cover mb-5 lg:mb-0" />
        </div>
        <div className="flex flex-col justify-center lg:text-left lg:col-span-2 lg:ms-24">
          <h1 className={`text-5xl font-bold ${roboto_mono.className}`}>Magdelana Moseley</h1>
          <p className="text-md text-slate-600 mt-4 max-w-prose mx-auto border-b border-black pb-10 lg:border-b-white lg:pb-0">Hey, my name is Maggie! I&apos;ll tell you a few things about me so that we can get to know each other. I am 19, born and raised in Sheridan Wyoming and now go to school in Laramie at the University of Wyoming where I am studying Human Nutrition and Food. I am a big fan girl (One Direction isn&apos;t broken up they&apos;re just on a break, and they&apos;ll be back soon!), from movies and TV shows to bands and solo artists, you name it. I am obsessed with wiener dogs and could eat peanut butter for every meal for the rest of my life. I love music and traveling and being outside and that kind of sums me up, well the important stuff at least. Though I might have to clarify one of those statements… while I am a student at the University of Wyoming, I am not currently studying there. I&apos;m actually studying on exchange at the University of South Australia, and I love it! So come join me for the semester :)</p>
        </div>
      </div>
    </div>
  )
}
