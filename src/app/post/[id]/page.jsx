"use client"
import React, { Suspense } from "react";
import Link from "next/link";
import Image from 'next/image';
import { roboto_mono, raleway } from "../../fonts";
import { notFound } from "next/navigation";
import Button from "@/app/components/Button";
import DOMPurify from "isomorphic-dompurify";
import { posts } from "../../data";
import { motion, useScroll } from "framer-motion";

export default async function Page({ params }) {
    const post = posts.find(post => post.id == params.id);
    const { scrollYProgress } = useScroll();

    if (post === undefined) {
        return notFound();
    }
    return (
        <div>
            <div className="bg-primary pt-8 sm:pt-0 h-36 md:h-36 flex flex-col mb-0 sm:mb-8">
                <h1 className={`text-4xl sm:pt-6 lg:text-6xl font-bold px-4 ${roboto_mono.className}`}>{post.title}</h1>
            </div>
            <div className="w-11/12 md:w-5/6 mx-auto">
                <motion.div
                    className="mb-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "easeIn", delay: 0.5, duration: 1}}

                >
                    {/* <h1 className={`text-3xl md:text-6xl font-bold ${roboto_mono.className} mt-5 md:mt-10`}>{post.title}</h1> */}

                    <Suspense fallback={<div className="w-100 bg-slate-500"></div>}>
                        <Image src={`/images/post${post.id}.webp`} alt="Passport" width={500} height={300} className=' mx-auto mt-5 sm:mt-10' priority="true" />
                    </Suspense>
                    <div className="text-lg xl:text-xl text-start max-w-prose mx-auto">
                        <p className="mt-5 md:mt-10 text-start text-slate-500 text-lg xl:text-xl">{post.date}</p>
                        {post.paragraphs.map((paragraph, index) => {
                            return (
                                <p key={index} className='mb-10' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(paragraph) }}>
                                </p>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
            <Button text="Return Home" link="/" />
            <motion.div style={{ scaleX: scrollYProgress}} className="h-3 bg-primary fixed bottom-0 left-0 right-0"/>  
        </div >
    )
}