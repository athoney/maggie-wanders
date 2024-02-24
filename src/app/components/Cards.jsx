import React from 'react'
import Card from './Card'
import { promises as fs } from 'fs';


export default async function Cards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center">
            {data.posts.map((post) => {
                return (
                <Card key={post.id} id={post.id} title={post.title} date={post.date} paragraphs={post.paragraphs} />
                )
            })}
        </div>
    )
}
