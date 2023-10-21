import type { NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '@/lib/prisma';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';

const authOptions: NextAuthOptions = {
  session: { strategy: 'jwt' },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/',
    signOut: '/',
  },
};

export default NextAuth(authOptions);
