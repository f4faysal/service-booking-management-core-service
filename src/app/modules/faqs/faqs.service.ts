import { Faqs } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insartIntoDB = async (data: Faqs): Promise<Faqs> => {
  console.log(data);
  const result = await prisma.faqs.create({
    data,
  });
  return result;
};

const getAllFromDB = async (): Promise<Faqs[]> => {
  const result = await prisma.faqs.findMany({});
  return result;
};

const getByIdFromDB = async (id: string): Promise<Faqs | null> => {
  const result = await prisma.faqs.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const deleteByIdFromDB = async (id: string): Promise<Faqs | null> => {
  const result = await prisma.faqs.delete({
    where: {
      id,
    },
  });
  return result;
};

const updateOneInDB = async (id: string, data: Faqs): Promise<Faqs | null> => {
  const result = await prisma.faqs.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

export const FaqsService = {
  insartIntoDB,
  getAllFromDB,
  getByIdFromDB,
  deleteByIdFromDB,
  updateOneInDB,
};
