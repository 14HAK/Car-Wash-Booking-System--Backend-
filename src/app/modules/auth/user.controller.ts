import { NextFunction, Request, Response } from 'express';
import UserZodSchema from './user.validation';
import {
  findUserByEmail,
  passwordCompare,
  signupUser,
  tokenProvider
} from './user.service';
import catchAsync from '../../utils/catchAsync';
import AppError from '../../errors/AppError';
import { AnyObject } from 'mongoose';

export const userSignup = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const rawData = await req.body;
    const isValidData = await UserZodSchema.parseAsync(rawData);

    const result = await signupUser(isValidData);
    if (!result) {
      return next(new AppError('data created unsuccessful', 501));
    }

    res.status(201).json({
      success: 'true',
      statusCode: 200,
      message: 'User registered successfully',
      data: result
    });
  }
);

export const userLogin = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // req.body coming properly. {email, password}
    const rawData = await req?.body;
    const { email, password } = rawData;

    const user: AnyObject | null = await findUserByEmail(email);
    if (!user) {
      return next(new AppError('No Data Found', 404));
    }

    const verifyPassword = await passwordCompare(password, user.password);
    if (!verifyPassword) {
      return next(new AppError('Invalid Credentials password', 400));
    }

    const token = await tokenProvider(rawData);
    if (!token) {
      return next(new AppError('Invalid Credentials token', 400));
    }

    // const stringToken = JSON.stringify(jwtToken);
    res.set('Authorization', `Bearer ${token}`);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'User logged in successfully',
      token: token,
      data: user
    });
  }
);
