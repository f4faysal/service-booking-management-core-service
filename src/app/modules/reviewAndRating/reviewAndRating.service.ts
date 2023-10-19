import { Reviews } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (
  data: Reviews,
  userId: string
): Promise<Reviews> => {
  data.userId = userId;

  const existForBooking = await prisma.booking.findMany({
    where: {
      serviceId: data.serviceId,
      userId: userId, // Optionally, check if the user has actually booked this service
      // status: BookingStatus.accepted,
    },
  });

  if (existForBooking.length === 0) {
    throw new Error('User has not booked this service.');
  }

  // Ensure the service being reviewed exists
  const existingService = await prisma.services.findUnique({
    where: { id: data.serviceId },
  });

  if (!existingService) {
    throw new Error('Service does not exist.');
  }

  // Create the review
  const result = await prisma.reviews.create({ data });

  return result;
};

const getAllFromDB = async (): Promise<Reviews[]> => {
  const result = await prisma.reviews.findMany({
    include: {
      user: true,
      service: true,
    },
  });
  return result;
};

const getByIdFromDB = async (id: string): Promise<Reviews[]> => {
  const result = await prisma.reviews.findMany({
    where: { serviceId: id },
    include: {
      user: true,
      service: true,
    },
  });
  return result;
};

// const updateIntoDB = async (id: string, payload: ReviewAndRating): Promise<ReviewAndRating | null> => {
//      const result = await prisma.reviewAndRating.update({ where: { id }, data: payload });
//      return result;

// }

// const deleteFromDB = async (id: string): Promise<ReviewAndRating | null> => {
//      const result = await prisma.reviewAndRating.delete({ where: { id } });
//      return result;
// }

// const getProfile = async (id: string): Promise<ReviewAndRating | null> => {
//      const result = await prisma.reviewAndRating.findUnique({ where: { id } });
//      return result;
// }

export const ReviewAndRatingService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
};
