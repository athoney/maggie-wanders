"use client"
import Card from "./components/Card";
import { Suspense } from "react";
import { SP } from "next/dist/shared/lib/utils";
import Spotify from "./components/Spotify";
import { posts } from "./data";
import Image from 'next/image';
import { roboto_mono } from "./fonts";
import { motion, AnimatePresence, delay } from "framer-motion";


export default async function Home() {
  const parent = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  const child = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  return (
    <main className="">
      {/* <AnimatePresence> */}
      <div
        className="bg-primary relative h-96 md:h-128 flex flex-col"
      >
        <div className="m-auto pb-3">
          <Image src="/images/magdelana-sq.png" alt="Koala" width={250} height={250} className='rounded-full mx-auto w-36 md:w-64' quality={60} />
          <h1 className={`mt-4 text-4xl md:text-6xl font-bold ${roboto_mono.className}`}>Maggie Wanders</h1>
          <div className="max-w-prose text-center mx-auto">
            <motion.p
              className="mt-4 md:mt-6 text-lg md:text-xl w-5/6 md:w-100 mx-auto"
            >The one stop shop for all things Maggie in Australia complete with practical advice, personal reflections on my study abroad experience and my journey as a Gilman Scholar</motion.p>
          </div>
        </div>
      </div>
      {/* </AnimatePresence> */}
      <div className="w-5/6 mx-auto lg:mt-14">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 mt-10">
          <div className="col-span-2">
            <AnimatePresence>
              <motion.div variants={parent} initial="hidden" animate="show">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-end md:gap-12">
                  {
                    posts.map((post) => {
                      return (
                        <motion.div variants={child} key={post.id}>
                          <Card key={post.id} id={post.id} title={post.title} date={post.date} paragraphs={post.paragraphs} />
                        </motion.div>
                      )
                    })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <AnimatePresence>
            <motion.div
              className="col-span-1 min-h-96"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1}}
              transition={{delay: 0.2}}>
              <Spotify />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
