import Image from 'next/image';
import prisma from '@/lib/prisma';

export default async function Home() {
  const users = prisma?.user.findMany();
  const posts = prisma?.post.findMany();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="font-bold text-2xl">Post</h1>
      <h1 className="font-bold text-2xl"></h1>
      {(await users).map((user, index) => (
        <div key={user.id} className="bg-white m-2 w-[500px]">
          <p className="hidden">id: {user.id}</p>
          <p>著者: {user.name}</p>
          <p className="hidden">email: {user.email}</p>
        </div>
      ))}
      <br />
      {(await posts).map((post, index) => (
        <div key={post.id_post} className="bg-white m-2 w-[500px]">
          <p className="hidden">id: {post.id_post}</p>

          <p className="my-5 p-8 font-bold text-center text-2xl underline">
            {post.title}
          </p>
          <p className="mb-5 p-8 text-lg">{post.content}</p>
          <p className="">published: {post.published + ``}</p>
          <p className="">authorId: {post.userId}</p>
        </div>
      ))}
    </main>
  );
}
