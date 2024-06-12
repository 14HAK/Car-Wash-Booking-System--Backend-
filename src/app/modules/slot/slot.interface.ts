import { Types } from 'mongoose';

interface TSLOT {
  service: Types.ObjectId;
  date: Date;
  startTime: string;
  endTime: string;
  isBooked: boolean;
}

export default TSLOT;
