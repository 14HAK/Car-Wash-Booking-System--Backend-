"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const UserZodSchema = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
    phone: zod_1.z.string().max(15, 'global contact number maximum 15 digits'),
    role: zod_1.z.enum(['admin', 'user']),
    address: zod_1.z
        .string()
        .max(100, 'address need maximum 100 characters')
        .min(10, 'address need minimum 10 characters')
});
exports.default = UserZodSchema;
