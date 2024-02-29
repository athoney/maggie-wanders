import Hero from "@/app/components/Hero";
import Cards from "@/app/components/Cards";
import Card from "./components/Card";
import { Suspense } from "react";
import { SP } from "next/dist/shared/lib/utils";
import dynamic from "next/dynamic";
import Spotify from "@/app/components/Spotify";
import { posts } from "@/app/data";
import Image from 'next/image';



export default async function Home() {
  return (
    <main className="">
      <div className="bg-primary h-64">
        <Image src="/images/maggie-wanders.png" alt="Koala" width={800} height={300} className='rounded-lg mx-auto' />
      </div>
      <div className="w-5/6 xl:w-2/3 mx-auto lg:mt-14">
        <Hero />
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
          <div className="col-span-1">
            <Suspense fallback={<p className="text-5xl">Loading...</p>}>
              <Spotify />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
