"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const zod_1 = require("zod");
const bookingValidation = zod_1.z.object({
    customer: zod_1.z === null || zod_1.z === void 0 ? void 0 : zod_1.z.string().refine((value) => {
        return mongoose_1.default.Types.ObjectId.isValid(value);
    }, 'Invalid ObjectId'),
    service: zod_1.z === null || zod_1.z === void 0 ? void 0 : zod_1.z.string().refine((value) => {
        return mongoose_1.default.Types.ObjectId.isValid(value);
    }, 'Invalid ObjectId'),
    slot: zod_1.z === null || zod_1.z === void 0 ? void 0 : zod_1.z.string().refine((value) => {
        return mongoose_1.default.Types.ObjectId.isValid(value);
    }, 'Invalid ObjectId'),
    vehicleType: zod_1.z.enum([
        'car',
        'truck',
        'SUV',
        'van',
        'motorcycle',
        'bus',
        'electricVehicle',
        'hybridVehicle',
        'bicycle',
        'tractor'
    ]),
    vehicleBrand: zod_1.z.string(),
    vehicleModel: zod_1.z.string(),
    manufacturingYear: zod_1.z.number(),
    registrationPlate: zod_1.z.string()
});
exports.default = bookingValidation;
