import Hero from "@/app/components/Hero";
import Cards from "@/app/components/Cards";
import Card from "./components/Card";
import { Suspense } from "react";
import { SP } from "next/dist/shared/lib/utils";
import dynamic from "next/dynamic";
import Spotify from "@/app/components/Spotify";
import { getAllPosts } from "@/middleware/api";



export default async function Home() {
  const data = await getAllPosts();
  return (
    <main className="">
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 mt-10">
        <div className="col-span-2">

          <div className="grid grid-cols-1 md:grid-cols-2 justify-end md:gap-4">
            <p className='md:col-span-2 text-left font-bold text-2xl md:-mb-4'>All Posts</p>

            {data.map((post) => {
              return (
                <Card key={post.id} id={post.id} title={post.title} date={post.date} paragraphs={post.paragraphs} />
              )
            })}
          </div>
        </div>
        <div className="col-span-1">
          <p className='text-left font-bold text-2xl'>Spotify</p>
          <Suspense fallback={<p className="text-5xl">Loading...</p>}>
            <Spotify />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
