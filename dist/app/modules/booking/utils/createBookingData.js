"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const slot_model_1 = __importDefault(require("../../slot/slot.model"));
const AppError_1 = __importDefault(require("../../../errors/AppError"));
const createBookingData = (rawData, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const { serviceId, slotId, vehicleType, vehicleBrand, vehicleModel, manufacturingYear, registrationPlate } = rawData;
    const slot = yield slot_model_1.default.findById(slotId);
    if (!slot || slot.isBooked === 'booked') {
        throw new AppError_1.default('slot is already booked', 400);
    }
    const bookingData = {
        customer: userId,
        service: serviceId,
        slot: slotId,
        vehicleType,
        vehicleBrand,
        vehicleModel,
        manufacturingYear,
        registrationPlate
    };
    return bookingData;
});
exports.default = createBookingData;
