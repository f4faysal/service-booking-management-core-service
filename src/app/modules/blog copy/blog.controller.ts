import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { BlogService } from './blog.service';

const insartIntoDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await BlogService.insartIntoDB(req.body);

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
    const result = await BlogService.getAllFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog faced successfully',
      data: result,
    });
  }
);
const getByIdFromDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await BlogService.getByIdFromDB(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog faced successfully',
      data: result,
    });
  }
);

const updateOneInDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await BlogService.updateOneInDB(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog Upate successfully',
      data: result,
    });
  }
);

const deleteByIdFromDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await BlogService.deleteByIdFromDB(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog deleted successfully',
      data: result,
    });
  }
);

export const BlogController = {
  insartIntoDB,
  getAllFromDB,
  getByIdFromDB,
  deleteByIdFromDB,
  updateOneInDB,
};
