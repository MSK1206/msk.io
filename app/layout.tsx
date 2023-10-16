import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SessionProviderWrap from './contexts/SessionProviderWrap';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'msk.io',
  description: 'Next.js + PlanetScale with Prisma project starter kit',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <SessionProviderWrap>
          <main>{children}</main>
        </SessionProviderWrap>
      </body>
    </html>
  );
}
