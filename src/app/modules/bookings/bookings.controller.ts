import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { BookingsService } from './bookings.service';

const insartIntoDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { userId } = req.user as { userId: string };

    const result = await BookingsService.insartIntoDB(req.body, userId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Booking successfully',
      data: result,
    });
  }
);
const getAllFromDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { userId } = req.user as { userId: string };
    const result = await BookingsService.getAllFromDB(userId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Booking faced successfully',
      data: result,
    });
  }
);
const getByIdFromDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { userId } = req.user as { userId: string };
    const { id } = req.params;

    const result = await BookingsService.getByIdFromDB(userId, id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Booking faced successfully',
      data: result,
    });
  }
);
const getByUserFromDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { userId } = req.user as { userId: string };

    const result = await BookingsService.getByUserFromDB(userId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Booking faced successfully',
      data: result,
    });
  }
);

const updateOneInDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await BookingsService.updateOneInDB(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Booking Upate successfully',
      data: result,
    });
  }
);

const deleteByIdFromDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { userId } = req.user as { userId: string };
    const { id } = req.params;

    const result = await BookingsService.deleteByIdFromDB(userId, id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Booking faced successfully',
      data: result,
    });
  }
);

export const BookingsController = {
  getAllFromDB,
  insartIntoDB,
  getByIdFromDB,
  getByUserFromDB,
  deleteByIdFromDB,
  updateOneInDB,
};
