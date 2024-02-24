import { promises as fs } from 'fs';


export async function getAllPosts() {
    const file = await fs.readFile(process.cwd() + '/src/app/data.json', 'utf8');
    console.log(process.cwd());
    const data = JSON.parse(file);
    return data.posts;
}

export async function getPost(id) {
    const file = await fs.readFile(process.cwd() + '/src/app/data.json', 'utf8');
    console.log(process.cwd());

    const data = JSON.parse(file);
    let post = data.posts.filter(post => post.id == id);
    if (post.length === 0) {
        return notFound();
    }
    post = post[0];
    return post;
}