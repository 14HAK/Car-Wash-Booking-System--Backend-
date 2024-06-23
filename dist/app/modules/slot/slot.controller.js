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
exports.availableSlots = exports.createSlots = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const totalCountSlots_1 = __importDefault(require("./utils/totalCountSlots"));
const slot_service_1 = require("./slot.service");
const slot_validation_1 = __importDefault(require("./slot.validation"));
const makeSearchQuery_1 = require("./utils/makeSearchQuery");
const createSlots = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield req.body;
    const isValidData = yield slot_validation_1.default.parseAsync(data);
    if (!isValidData) {
        return next(new AppError_1.default('zod validation error', 400));
    }
    const { service: serviceId, date, startTime, endTime } = isValidData;
    const isValidId = mongoose_1.default.Types.ObjectId.isValid(serviceId);
    if (!isValidId) {
        return next(new AppError_1.default('invalid objectid', 400));
    }
    const isServiceExist = yield (0, slot_service_1.existService)(serviceId);
    if (!isServiceExist) {
        return next(new AppError_1.default('No Data Found', 404));
    }
    const serviceDuration = isServiceExist === null || isServiceExist === void 0 ? void 0 : isServiceExist.duration;
    const totalSlots = yield (0, totalCountSlots_1.default)(serviceId, serviceDuration, date, startTime, endTime);
    if (!totalSlots) {
        return next(new AppError_1.default('bad gateway', 502));
    }
    const result = yield (0, slot_service_1.slotsCreate)(totalSlots);
    if (!result) {
        return next(new AppError_1.default('No Data Found', 404));
    }
    res.status(201).json({
        success: 'true',
        statusCode: 200,
        message: 'Slots created successfully',
        data: result
    });
});
exports.createSlots = createSlots;
const availableSlots = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceId = req.params.serviceId;
    const query = req.query;
    const finalQuery = yield (0, makeSearchQuery_1.makeSearchQuery)(serviceId, query);
    const result = yield (0, slot_service_1.slotsAvailable)(finalQuery);
    if (!result) {
        return next(new AppError_1.default('No Data Found', 404));
    }
    res.status(201).json({
        success: 'true',
        statusCode: 200,
        message: 'available slots retrieved successfully',
        data: result
    });
});
exports.availableSlots = availableSlots;
