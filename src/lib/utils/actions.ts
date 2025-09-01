'use server';

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
