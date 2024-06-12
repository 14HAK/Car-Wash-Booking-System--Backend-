import { z } from 'zod';

const slotValidation = z.object({
  service: z.string(),
  startTime: z.string(),
  endTime: z.string()
});

export default slotValidation;
