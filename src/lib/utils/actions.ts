'use server';

import db from './prisma';

export const getFeatured = async () => {
  const featured = await db.product.findMany({
    where: { featured: true },
  });
  return featured;
};

export const getAll = async () => {
  const featured = await db.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return featured;
};
