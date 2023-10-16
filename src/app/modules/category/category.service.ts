import { Categories } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (data: Categories): Promise<Categories> => {
  const result = await prisma.categories.create({ data });
  return result;
};

const getAllFromDB = async (): Promise<Categories[]> => {
  const result = await prisma.categories.findMany();
  return result;
};

const getByIdFromDB = async (id: string) => {
  const result = await prisma.categories.findUnique({ where: { id } });

  //   const books = await prisma.book.findMany({ where: { CategoriesId: id } });

  return result;
};

const updateIntoDB = async (
  id: string,
  payload: Categories
): Promise<Categories | null> => {
  const result = await prisma.categories.update({
    where: { id },
    data: payload,
  });
  return result;
};

const deleteFromDB = async (id: string): Promise<Categories | null> => {
  console.log(id);
  // const result = await prisma.categories.delete({ where: { id } });
  const result = await prisma.categories.delete({ where: { id } });
  return result;
};

export const CategoryService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
};
