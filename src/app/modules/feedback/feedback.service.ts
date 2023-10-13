import { Feedback } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insartIntoDB = async (data: Feedback): Promise<Feedback> => {
  console.log(data);
  const result = await prisma.feedback.create({
    data,
  });
  return result;
};

const getAllFromDB = async (): Promise<Feedback[]> => {
  console.log('first');

  const result = await prisma.feedback.findMany({});

  // const result = await prisma.feedback.findMany();

  return result;
};

const getByIdFromDB = async (id: string): Promise<Feedback | null> => {
  const result = await prisma.feedback.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const deleteByIdFromDB = async (id: string): Promise<Feedback | null> => {
  const result = await prisma.feedback.delete({
    where: {
      id,
    },
  });
  return result;
};

const updateOneInDB = async (
  id: string,
  data: Feedback
): Promise<Feedback | null> => {
  const result = await prisma.feedback.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

export const FeedbackService = {
  insartIntoDB,
  getAllFromDB,
  getByIdFromDB,
  deleteByIdFromDB,
  updateOneInDB,
};
