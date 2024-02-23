import Hero from "@/app/components/Hero";
import Cards from "@/app/components/Cards";
import { promises as fs } from 'fs';
import Card from "./components/Card";
import { Suspense } from "react";
import { SP } from "next/dist/shared/lib/utils";
import dynamic from "next/dynamic";

const Spotify = dynamic(
  () => import('./components/Spotify'),
  // { loading: () => <p className="text-5xl">Loading...</p> },
  { ssr: false }
)



export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/src/app/data.json', 'utf8');
  const data = JSON.parse(file);
  return (
    <main className="">
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 mt-10">
        <div className="col-span-2">

          <div className="grid grid-cols-1 md:grid-cols-2 justify-end md:gap-4">
            <p className='md:col-span-2 text-left font-bold text-2xl md:-mb-4'>All Posts</p>

            {data.posts.map((post) => {
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
