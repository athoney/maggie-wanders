"use client"
import Hero from "@/app/components/Hero";
import Cards from "@/app/components/Cards";
import Card from "./components/Card";
import { Suspense } from "react";
import { SP } from "next/dist/shared/lib/utils";
import dynamic from "next/dynamic";
import Spotify from "@/app/components/Spotify";
import { posts } from "@/app/data";
import Image from 'next/image';
import { roboto_mono } from "./fonts";
import { motion , AnimatePresence} from "framer-motion";


export default async function Home() {
  return (
    <main className="">
      <AnimatePresence>
      <motion.div 
        className="bg-primary relative h-96 md:h-128 flex flex-col"
        initial={{height: "100vh"}}
        // initial={{y:-500, opacity: 0.3}}
        animate={{y:0, opacity: 1, height: "100%"}}
        transition={{duration: 2}}
        exit={{height: "100vh"}}
        layout
        >
        {/* <Image src="/images/maggie-wanders.png" alt="Koala" width={800} height={300} className='rounded-lg' /> */}
        <div className="m-auto pb-3">
          <Image src="/images/magdelana-sq.png" alt="Koala" width={250} height={250} className='rounded-full mx-auto w-36 md:w-64' />
          <h1 className={`mt-4 text-4xl md:text-6xl font-bold ${roboto_mono.className}`}>Maggie Wanders</h1>
          <div className="max-w-prose text-center mx-auto">
            <p className="mt-4 md:mt-6 text-lg md:text-2xl w-5/6 md:w-100 mx-auto">A candid account of my study abroad experience in Australia, complete with practical advice, personal reflections, and my journey as a Gilman Scholar</p>
          </div>
        </div>
      </motion.div>
      </AnimatePresence>
      <div className="w-5/6 mx-auto lg:mt-14">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 mt-10">
          <div className="col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-end md:gap-12">
              {posts.map((post) => {
                return (
                  <Card key={post.id} id={post.id} title={post.title} date={post.date} paragraphs={post.paragraphs} />
                )
              })}
            </div>
          </div>
          <div className="col-span-1 min-h-96">
            <Suspense fallback={<p className="text-5xl">Loading...</p>}>
              <Spotify />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
