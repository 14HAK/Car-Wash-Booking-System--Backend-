import { z } from 'zod';

const serviceValidation = z.object({
  name: z.string(),
  description: z.string(),
  price: z.string(),
  duration: z.number()
});

export default serviceValidation;
