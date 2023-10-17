import Image from 'next/image';
import prisma from '@/lib/prisma';
import SignIn from './components/functions/SignIn';
import Link from 'next/link';

export default async function Home() {
  return (
    <main className="hero bg-base-200 flex min-h-screen items-center justify-center">
      <div className="hero-content flex-col items-center">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <form className="card-body">
            <div className="flex flex-col items-center justify-center">
              <Image
                src={'/mylogo.svg'}
                className="animate-rotate-center mb-5"
                alt="My Logo"
                width={100}
                height={100}
                priority
              />
              <SignIn />
            </div>
          </form>
        </div>
        <Link
          href={'/protect'}
          className="btn btn-base-100 border border-slate-400 rounded-lg p-1 w-[250px] hover:text-transparent hover:bg-white"
        >
          <span className="bg-clip-text hover:text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            認証後に見れるページ
          </span>
        </Link>
      </div>
    </main>
  );
}
