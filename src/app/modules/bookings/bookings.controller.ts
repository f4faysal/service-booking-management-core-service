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

export const BookingsController = {
  // getAllFromDB,
  insartIntoDB,
};
