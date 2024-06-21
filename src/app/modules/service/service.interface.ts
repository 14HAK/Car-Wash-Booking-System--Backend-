import { Document } from 'mongoose';

export interface TSERVICE extends Document {
  name: string;
  description: string;
  price: number;
  duration: number;
  isDeleted: boolean;
}

export type PartialService = Partial<TSERVICE>;

