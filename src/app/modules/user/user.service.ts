import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getAllFromDB = async (): Promise<User[]> => {
  const result = await prisma.user.findMany();
  return result;
};

const getByIdFromDB = async (id: string): Promise<User | null> => {
  const result = await prisma.user.findUnique({ where: { id } });
  return result;
};

const updateIntoDB = async (
  id: string,
  payload: User
): Promise<User | null> => {
  const result = await prisma.user.update({ where: { id }, data: payload });
  return result;
};

const deleteFromDB = async (id: string): Promise<User | null> => {
  const result = await prisma.user.delete({ where: { id } });
  return result;
};

const getProfile = async (userId: string): Promise<User | null> => {
  // const result = await prisma.user.findUnique({ where: { email } });
  const result = await prisma.user.findUnique({ where: { id: userId } });
  return result;
};

export const UserService = {
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
  getProfile,
};
