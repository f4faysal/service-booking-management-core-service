import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { BookingsService } from './bookings.service';

const getAllFromDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await BookingsService.getAllFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User fetched successfully',
      data: result,
    });
  }
);

export const BookingsController = {
  getAllFromDB,
};
