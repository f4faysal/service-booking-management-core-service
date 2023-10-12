import { Prisma, Services } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { serviceSearchableFields } from './services.contants';
import { IServiceFilters } from './services.interface';

const insertIntoDB = async (data: Services): Promise<Services> => {
  const result = await prisma.services.create({
    data,
    include: {
      category: true,
    },
  });
  return result;
};

const getAllFromDB = async (
  filters: IServiceFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<Services[]>> => {
  const { search } = filters;
  const { page, limit, skip } =
    paginationHelpers.calculatePagination(paginationOptions);

  const andConditions = [];

  if (search) {
    andConditions.push({
      OR: serviceSearchableFields.map(field => ({
        [field]: {
          contains: search,
          mode: 'insensitive',
        },
      })),
    });
  }

  // if (minPrice !== undefined) {
  //   andConditions.push({
  //     price: {
  //       gte: parseFloat(minPrice),
  //     },
  //   });
  // }

  // if (maxPrice !== undefined) {
  //   andConditions.push({
  //     price: {
  //       lte: parseFloat(maxPrice),
  //     },
  //   });
  // }
  // if (category !== undefined) {
  //   andConditions.push({
  //     categoryId: {
  //       equals: category,
  //     },
  //   });
  // }

  const whereConditions: Prisma.ServicesWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.services.findMany({
    include: {
      category: true,
    },
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      paginationOptions.sortBy && paginationOptions.sortOrder
        ? { [paginationOptions.sortBy]: paginationOptions.sortOrder }
        : {
            price: 'asc',
          },
  });

  const total = await prisma.services.count({
    where: whereConditions,
  });

  const totalPage = Math.ceil(total / limit);

  return {
    meta: {
      total,
      page,
      limit,
      totalPage,
    },
    data: result,
  };
};

const getByIdFromDB = async (id: string): Promise<Services | null> => {
  const result = await prisma.services.findUnique({ where: { id } });
  return result;
};
const updateIntoDB = async (
  id: string,
  payload: Services
): Promise<Services | null> => {
  const result = await prisma.services.update({ where: { id }, data: payload });
  return result;
};
const deleteFromDB = async (id: string): Promise<Services | null> => {
  const result = await prisma.services.delete({ where: { id } });
  return result;
};

export const ServicesService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
};