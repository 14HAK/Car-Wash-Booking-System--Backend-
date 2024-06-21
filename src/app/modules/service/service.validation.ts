import { z } from 'zod';

const serviceValidation = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  duration: z.number()
});

export default serviceValidation;
