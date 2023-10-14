import Image from 'next/image';
import prisma from '@/lib/prisma';

export default async function Home() {
  // prismaを(PlanetScaleをもじって) planetSqlにして呼べるようにする。
  const users = prisma?.user.findMany();
  // Postテーブルから全てデータを取得
  const posts = prisma?.post.findMany();
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <h1 className='font-bold text-2xl'>Post</h1>
      <h1 className='font-bold text-2xl'></h1>
      {(await users).map((user, index) => (
        <div key={user.id} className='bg-white m-2 w-[500px]'>
          <p className='hidden'>id: {user.id}</p>
          <p>著者: {user.name}</p>
          <p className='hidden'>email: {user.email}</p>
          {/* Add more user attributes as needed */}
        </div>
      ))}
      <br />

      {/* Postテーブルの結果の一覧を画面に出力する */}
      {(await posts).map((post, index) => (
        <div key={post.id} className='bg-white m-2 w-[500px]'>
          <p className='hidden'>id: {post.id}</p>

          <p className='my-5 p-8 font-bold text-center text-2xl underline'>
            {post.title}
          </p>
          <p className='mb-5 p-8 text-lg'>{post.content}</p>
          <p className='hidden'>published: {post.published + ``}</p>
          <p className='hidden'>authorId: {post.authorId}</p>
        </div>
      ))}
    </main>
  );
}
