import { Booking } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insartIntoDB = async (data: Booking): Promise<Booking> => {
  const result = await prisma.booking.create({
    data,
    include: {
      user: true,
      service: true,
    },
  });
  return result;
};

export const BookingsService = {
  insartIntoDB,
};
