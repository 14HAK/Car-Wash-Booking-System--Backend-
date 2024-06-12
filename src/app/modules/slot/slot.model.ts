import { Schema, model } from 'mongoose';
import TSLOT from './slot.interface';

const slotSchema = new Schema<TSLOT>({
  service: {
    type: Schema.Types.ObjectId,
    ref: 'Service'
  },
  date: {
    type: Date,
    default: Date.now()
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
    type: Boolean,
    default: false
  }
});

const slotModel = model<TSLOT>('Slot', slotSchema);

export default slotModel;
