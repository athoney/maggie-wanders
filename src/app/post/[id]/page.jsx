import React from "react";
import Link from "next/link";
import Image from 'next/image';
import { roboto_mono, raleway } from "@/app/fonts";
import { promises as fs } from 'fs';
import { notFound } from "next/navigation";
import Button from "@/app/components/Button";
import DOMPurify from "isomorphic-dompurify";

export default async function Page({ params }) {
    const file = await fs.readFile(process.cwd() + '/src/app/data.json', 'utf8');
    const data = JSON.parse(file);
    let post = data.posts.filter(post => post.id == params.id);
    if (post.length === 0) {
        return notFound();
    }
    post = post[0];

    return (
        <div>
            <div className="mb-10">
                <Image src={`/images/post${post.id}.png`} alt="Passport" width={500} height={300} className='rounded-lg mx-auto mt-10' />
                <h1 className={`text-2xl md:text-6xl font-bold ${roboto_mono.className} mt-5 md:mt-10`}>{post.title}</h1>
                <div className="text-lg xl:text-xl text-start max-w-prose mx-auto">
                    <p className="mt-5 md:mt-10 text-start text-slate-500 text-lg xl:text-xl">{post.date}</p>

                    {post.paragraphs.map((paragraph, index) => {
                        return (
                            <p key={index} className='mb-10 ' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(paragraph) }}>
                            </p>
                        )
                    })}
                </div>
            </div>


            <Button text="Return Home" link="/" />

        </div>
    )
}