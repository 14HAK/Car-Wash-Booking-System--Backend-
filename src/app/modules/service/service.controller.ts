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

export const createServices: RequestHandler = async (req, res, next) => {
  const rawData = await req.body;
  const validateData = await serviceValidation.parseAsync(rawData);

  const result = await servicesCreate(validateData);
  if (!result) {
    return next(new AppError('data created unsuccessful', 500));
  }

  res.status(201).json({
    status: 'true',
    statusCode: 200,
    message: 'Service created successfully',
    data: result
  });
};

export const getServiceById: RequestHandler = async (req, res, next) => {
  const ID = req.params.id;

  const isValidObjectId = mongoose.Types.ObjectId.isValid(ID);

  if (!isValidObjectId) {
    return next(new AppError('invalid objectid', 400));
  }

  const result = await serviceGetById(ID);
  if (!result) {
    return next(new AppError('Resource not found', 404));
  }

  res.status(200).json({
    status: 'true',
    statusCode: 200,
    message: 'Service retrieved successfully',
    data: result
  });
};

export const getAllServices: RequestHandler = async (req, res, next) => {
  const result = await serviceAll();
  if (!result) {
    return next(new AppError('Resource not found', 404));
  }

  res.status(200).json({
    status: 'true',
    statusCode: 200,
    message: 'Services retrieved successfully',
    data: result
  });
};

export const updateService: RequestHandler = async (req, res, next) => {
  const ID = req.params.id;
  const data = req.body;

  const isValidObjectId = mongoose.Types.ObjectId.isValid(ID);

  if (!isValidObjectId) {
    return next(new AppError('invalid objectid', 400));
  }

  const result = await serviceUpdate(ID, data);
  if (!result) {
    return next(new AppError('Resource not found', 404));
  }

  res.status(200).json({
    status: 'true',
    statusCode: 200,
    message: 'Service updated successfully',
    data: result
  });
};

export const deleteService: RequestHandler = async (req, res, next) => {
  const ID = req.params.id;

  const isValidObjectId = mongoose.Types.ObjectId.isValid(ID);

  if (!isValidObjectId) {
    return next(new AppError('invalid objectid', 400));
  }

  const result = await serviceDelete(ID);
  if (!result) {
    return next(new AppError('Resource not found', 404));
  }

  res.status(200).json({
    status: 'true',
    statusCode: 200,
    message: 'Service deleted successfully',
    data: result
  });
};

