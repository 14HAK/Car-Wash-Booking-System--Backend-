"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const zod_1 = require("zod");
const slotValidation = zod_1.z.object({
    service: zod_1.z.string().refine((value) => {
        return mongoose_1.Types.ObjectId.isValid(value);
    }, 'Invalid ObjectId'),
    date: zod_1.z.string(),
    startTime: zod_1.z.string(),
    endTime: zod_1.z.string()
});
exports.default = slotValidation;
