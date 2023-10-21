import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/react';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getSession({ req });

  if (!session || !session.user || !session.user.email) {
    // ユーザーがログインしていない場合
    res.status(401).send('Unauthorized');
    return;
  }

  const user = await prisma?.user.findUnique({
    where: {
      email: session?.user.email,
    },
  });

  if (!user) {
    // ユーザーが存在しない場合
    res.status(404).json({ content: 'User not found' });
    return;
  }

  if (user.role === 'ADMIN') {
    // ユーザーが管理者の場合
    res.status(200).json({ content: 'Admin page content' });
  } else if (user.role === 'CUSTOMER') {
    // ユーザーが顧客の場合
    res.status(200).json({ content: 'Return to Home' });
  } else {
    // ユーザーがその他の役割の場合
    res.status(403).json({ content: 'Forbidden' });
  }
}
