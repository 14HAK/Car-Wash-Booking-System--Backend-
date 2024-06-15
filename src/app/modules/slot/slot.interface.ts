import { Document, Schema } from 'mongoose';

interface TSLOT extends Document {
  service: Schema.Types.ObjectId;
  date: Date;
  startTime: string;
  endTime: string;
  isBooked: 'available' | 'booked' | 'canceled';
}

export default TSLOT;
