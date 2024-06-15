import { Document } from 'mongoose';

interface TSERVICE extends Document {
  name: string;
  description: string;
  price: string;
  duration: number;
  isDeleted: boolean;
}

export default TSERVICE;
