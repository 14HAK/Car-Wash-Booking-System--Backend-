import { z } from 'zod';

const serviceValidation = z.object({
  name: z.string({ message: 'name must be string.' }),
  description: z.string({ message: 'description must be string.' }),
  price: z.number({ message: 'price must be number.' }),
  duration: z.number({ message: 'duration must be number.' })
});

export default serviceValidation;
