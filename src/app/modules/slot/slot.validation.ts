import { Types } from 'mongoose';
import { z } from 'zod';

const slotValidation = z.object({
  service: z.string().refine((value) => {
    return Types.ObjectId.isValid(value as string); // Check if value is a valid ObjectId
  }, 'Invalid ObjectId'),
  date: z.string(),
  startTime: z.string(),
  endTime: z.string()
});

export default slotValidation;
