'use client';
import { signOut } from 'next-auth/react';

export default function page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1>Admin Page</h1>
      <button
        type="button"
        onClick={() => signOut()}
        className="btn btn-base-100 border border-slate-400 rounded-lg p-1 my-5 w-[250px]"
      >
        <span className="bg-clip-text hover:text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Sign out
        </span>
      </button>
    </div>
  );
}
