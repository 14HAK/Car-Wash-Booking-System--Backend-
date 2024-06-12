import { z } from 'zod';

const UserZodSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  phone: z.string().max(15, 'global contact number maximum 15 digits'),
  role: z.enum(['admin', 'user']),
  address: z
    .string()
    .max(100, 'address need maximum 100 characters')
    .min(10, 'address need minimum 10 characters')
});

export default UserZodSchema;
