'use client';
import { signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Admin() {
  const { data: session } = useSession();
  const [content, setContent] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/rolechecker');
      const data = await res.json();
      setContent(data.content);
    };

    if (session) {
      fetchData();
    }
  }, [session]);

  if (content) {
    if (content === 'Admin page content') {
      return (
        <>
          <h1>Wellcome to Admin Page.</h1>
          <button
            type="button"
            onClick={() => signOut()}
            className="btn btn-base-100 border border-slate-400 rounded-lg p-1 my-5 w-[250px]"
          >
            <span className="bg-clip-text hover:text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Sign out
            </span>
          </button>
        </>
      );
    }
    if (content === 'Return to Home') {
      return (
        <>
          <h1>You do not have permissions to the Admin Page.</h1>
          <button
            className="btn btn-base-100 border border-slate-400 rounded-lg p-1 my-5 w-[250px]"
            onClick={() => router.push('/')}
          >
            <span className="bg-clip-text hover:text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              TOPへ戻る
            </span>
          </button>
        </>
      );
    }
  }
}
