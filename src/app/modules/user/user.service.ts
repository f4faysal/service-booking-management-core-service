import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { IProfileUpdate } from './user.interface';

const getAllFromDB = async (): Promise<User[]> => {
  const result = await prisma.user.findMany();
  return result;
};

const getByIdFromDB = async (id: string): Promise<User | null> => {
  const result = await prisma.user.findUnique({ where: { id } });
  return result;
};

const updateIntoDB = async (
  userId: string,
  payload: User
): Promise<User | null> => {
  const data: IProfileUpdate = {};

  if (payload.name) {
    data['name'] = payload.name;
  }
  if (payload.address) {
    data['address'] = payload.address;
  }
  if (payload.contactNumber) {
    data['contactNumber'] = payload.contactNumber;
  }
  if (payload.profileImg) {
    data['profileImg'] = payload.profileImg;
  }
  console.log(payload);
  const result = await prisma.user.update({ where: { id: userId }, data });
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

const updateAdminRoles = async (
  id: string,
  payload: User
): Promise<User | null> => {
  const result = await prisma.user.update({ where: { id }, data: payload });
  return result;
};

export const UserService = {
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
  getProfile,
  updateAdminRoles,
};
