import { Booking } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insartIntoDB = async (data: Booking): Promise<Booking> => {
  const result = await prisma.bloge.create({
    data,
  });
  return result;
};

export const BlogService = {
  insartIntoDB,
  getAllFromDB,
  getByIdFromDB,
  deleteByIdFromDB,
  updateOneInDB,
};
