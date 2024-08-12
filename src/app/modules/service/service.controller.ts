import { RequestHandler } from 'express';
import serviceValidation from './service.validation';
import {
  serviceAll,
  serviceDelete,
  serviceGetById,
  serviceUpdate,
  servicesCreate
} from './service.service';
import AppError from '../../errors/AppError';
import mongoose from 'mongoose';
import catchAsync from '../../utils/catchAsync';

export const createServices: RequestHandler = catchAsync(
  async (req, res, next): Promise<void> => {
    const rawData = await req?.body;
    const validateData = await serviceValidation.parseAsync({ ...rawData });

    if (!validateData) {
      return next(new AppError('data validation rejected', 500));
    }

    const result = await servicesCreate(validateData);

    if (!result) {
      return next(new AppError('data created unsuccessful', 500));
    }

    res.status(201).json({
      success: 'true',
      statusCode: 200,
      message: 'Service created successfully',
      data: result
    });
  }
);

export const getServiceById: RequestHandler = catchAsync(async (req, res, next) => {
  const ID = req.params.id;

  const isValidObjectId = mongoose.Types.ObjectId.isValid(ID);

  if (!isValidObjectId) {
    return next(new AppError('invalid objectid', 400));
  }

  const result = await serviceGetById(ID);
  if (!result) {
    return next(new AppError('No Data Found', 404));
  }

  res.status(200).json({
    success: 'true',
    statusCode: 200,
    message: 'Service retrieved successfully',
    data: result
  });
});

export const getAllServices: RequestHandler = catchAsync(async (req, res, next) => {
  const result = await serviceAll();
  if (!result) {
    return next(new AppError('No Data Found', 404));
  }

  res.status(200).json({
    success: 'true',
    statusCode: 200,
    message: 'Services retrieved successfully',
    data: result
  });
});

export const updateService: RequestHandler = catchAsync(async (req, res, next) => {
  const ID = req.params.id;
  const data = await req.body;

  const isValidObjectId = mongoose.Types.ObjectId.isValid(ID);

  if (!isValidObjectId) {
    return next(new AppError('invalid objectid', 400));
  }

  const result = await serviceUpdate(ID, data);
  if (!result) {
    return next(new AppError('No Data Found', 404));
  }

  res.status(200).json({
    success: 'true',
    statusCode: 200,
    message: 'Service updated successfully',
    data: result
  });
});

export const deleteService: RequestHandler = catchAsync(async (req, res, next) => {
  const ID = req.params.id;

  const isValidObjectId = mongoose.Types.ObjectId.isValid(ID);

  if (!isValidObjectId) {
    return next(new AppError('invalid objectid', 400));
  }

  const result = await serviceDelete(ID);
  if (!result) {
    return next(new AppError('No Data Found', 404));
  }

  res.status(200).json({
    success: 'true',
    statusCode: 200,
    message: 'Service deleted successfully',
    data: result
  });
});

