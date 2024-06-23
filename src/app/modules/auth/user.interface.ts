import { Document, Model } from 'mongoose';

export interface TUSER extends Document {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: 'admin' | 'user';
  address: string;
}


export interface UserModel extends Model<TUSER> {
  comparePassword(plainPassword: string, hashedPassword: string): Promise<boolean>;
}

export interface DecodedToken {
  user: string;
  iat: number;
  exp: number;
}

export type PartialUser = Partial<TUSER>;
