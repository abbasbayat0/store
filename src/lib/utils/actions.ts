'use server';

import { redirect } from 'next/navigation';
import db from './prisma';

export const getFeatured = async () => {
  const featured = await db.product.findMany({
    where: { featured: true },
  });
  return featured;
};

export const getAll = async (search: string = '') => {
  const featured = await db.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: 'insensitive' } },
        { company: { contains: search, mode: 'insensitive' } },
      ],
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return featured;
};

export const getSingle = async (id: string) => {
  const product = await db.product.findUnique({
    where: {
      id: id,
    },
  });
  if (!product) redirect('/products');
  return product
};
