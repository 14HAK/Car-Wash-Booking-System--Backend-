import jwt from 'jsonwebtoken';
import { TUSER } from './user.interface';
import User from './user.model';
import { AnyObject } from 'mongoose';

export const signupUser = async (data: Partial<TUSER>) => {
  const result = await User.create(data);
  return result;
};

export const findUserByEmail = async (email: string): Promise<TUSER | null> => {
  const userExist = await User.findOne({ email });
  return userExist;
};

export const passwordCompare = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  const isMatch = User.comparePassword(password, hashedPassword);
  return isMatch;
};

export const tokenProvider = async (data: AnyObject): Promise<string> => {
  const payload = { ...data };
  const secretKey = 'ro8BS6Hiivgzy8Xuu09JDjlNLnSLldY5';
  const expire = { expiresIn: '1h' };

  const token = jwt.sign(payload, secretKey, expire);

  return token;
};
