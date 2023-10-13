import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { FaqsService } from './faqs.service';

const insartIntoDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await FaqsService.insartIntoDB(req.body);

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
    const result = await FaqsService.getAllFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faqs faced successfully',
      data: result,
    });
  }
);
const getByIdFromDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await FaqsService.getByIdFromDB(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faqs faced successfully',
      data: result,
    });
  }
);

const updateOneInDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await FaqsService.updateOneInDB(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faqs Upate successfully',
      data: result,
    });
  }
);

const deleteByIdFromDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await FaqsService.deleteByIdFromDB(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faqs deleted successfully',
      data: result,
    });
  }
);

export const FaqsController = {
  insartIntoDB,
  getAllFromDB,
  getByIdFromDB,
  deleteByIdFromDB,
  updateOneInDB,
};
