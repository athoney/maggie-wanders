import React from "react";
import Link from "next/link";
import Image from 'next/image';
import { roboto_mono, raleway } from "@/app/fonts";
import { promises as fs } from 'fs';
import { notFound } from "next/navigation";
import Button from "@/app/components/Button";
import DOMPurify from "isomorphic-dompurify";
import { posts } from "@/app/data";

export default async function Page({ params }) {
    const post = posts.find(post => post.id == params.id);
    if (post === undefined) {
        return notFound();
    }
    return (
        <div>
            <div className="bg-primary pt-8 sm:pt-0 h-36 md:h-36 flex flex-col mb-0 sm:mb-8">
                <h1 className={`text-4xl sm:pt-6 lg:text-6xl font-bold px-4 ${roboto_mono.className}`}>{post.title}</h1>
            </div>
            <div className="w-11/12 md:w-5/6 mx-auto">
                <div className="mb-10">
                    {/* <h1 className={`text-3xl md:text-6xl font-bold ${roboto_mono.className} mt-5 md:mt-10`}>{post.title}</h1> */}
                    <Image src={`/images/post${post.id}.png`} alt="Passport" width={500} height={300} className=' mx-auto mt-5 sm:mt-10' priority="true"/>
                    <div className="text-lg xl:text-xl text-start max-w-prose mx-auto">
                        <p className="mt-5 md:mt-10 text-start text-slate-500 text-lg xl:text-xl">{post.date}</p>
                        {post.paragraphs.map((paragraph, index) => {
                            return (
                                <p key={index} className='mb-10' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(paragraph) }}>
                                </p>
                            )
                        })}
                    </div>
                </div>
                <Button text="Return Home" link="/" />
            </div>
        </div>
    )
}