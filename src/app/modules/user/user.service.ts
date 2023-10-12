import { Role, User } from '@prisma/client';
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

const deleteFromDB = async (
  id: string,
  userId: string
): Promise<User | null> => {
  const isAdminExist = await prisma.user.findUnique({ where: { id: userId } });

  if (isAdminExist?.role === Role.admin) {
    const isUserExist = await prisma.user.findUnique({ where: { id } });
    if (isUserExist?.role === Role.user) {
      const result = await prisma.user.delete({ where: { id } });
      return result;
    } else {
      return null;
    }
  } else if (isAdminExist?.role === Role.super_admin) {
    const isUserExist = await prisma.user.findUnique({ where: { id } });
    if (isUserExist?.role === Role.user || isUserExist?.role === Role.admin) {
      const result = await prisma.user.delete({ where: { id } });
      return result;
    } else {
      return null;
    }
  }
  return null;
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
