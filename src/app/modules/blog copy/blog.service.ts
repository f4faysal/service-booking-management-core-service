import { Blog } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insartIntoDB = async (data: Blog): Promise<Blog> => {
  console.log(data);
  const result = await prisma.blog.create({
    data,
  });
  return result;
};

const getAllFromDB = async (): Promise<Blog[]> => {
  const result = await prisma.blog.findMany({});
  return result;
};

const getByIdFromDB = async (id: string): Promise<Blog | null> => {
  const result = await prisma.blog.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const deleteByIdFromDB = async (id: string): Promise<Blog | null> => {
  const result = await prisma.blog.delete({
    where: {
      id,
    },
  });
  return result;
};

const updateOneInDB = async (id: string, data: Blog): Promise<Blog | null> => {
  const result = await prisma.blog.update({
    where: {
      id,
    },
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
