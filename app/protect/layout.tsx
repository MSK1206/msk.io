import { Suspense } from 'react';
import Loading from './loading';

export const metadata = {
  title: 'Protect | msk.io',
  description: 'Next.js + PlanetScale with Prisma project starter kit',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </>
  );
}
