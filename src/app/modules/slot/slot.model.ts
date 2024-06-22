import { Schema, model } from 'mongoose';
import TSLOT from './slot.interface';

const slotSchema = new Schema<TSLOT>({
  service: {
    type: Schema.Types.ObjectId,
    ref: 'Service',
    required: [true, 'service identification id required']
  },
  date: {
    type: Date
  },
  startTime: {
    type: String,
    required: [true, 'start time must need']
  },
  endTime: {
    type: String,
    required: [true, 'end time must need']
  },
  isBooked: {
    type: String,
    enum: ['available', 'booked', 'canceled'],
    default: 'available'
  }
});

const Slot = model<TSLOT>('Slot', slotSchema);

export default Slot;
