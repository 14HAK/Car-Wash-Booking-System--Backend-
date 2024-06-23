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
exports.getMyBookings = exports.getBookingsAll = exports.createBookings = void 0;
const createBookingData_1 = __importDefault(require("./utils/createBookingData"));
const booking_service_1 = require("./booking.service");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const createBookings = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const rawData = yield req.body;
    const userId = (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.id;
    const bookingData = yield (0, createBookingData_1.default)(rawData, userId);
    const result = yield (0, booking_service_1.bookingsCreate)(bookingData);
    if (!result) {
        return next(new AppError_1.default('data created unsuccessful', 500));
    }
    const getBooking = yield (0, booking_service_1.bookingGet)();
    if (!getBooking) {
        return next(new AppError_1.default('No Data Found', 404));
    }
    res.status(201).json({
        success: 'true',
        statusCode: 200,
        message: 'Booking successful',
        data: getBooking
    });
});
exports.createBookings = createBookings;
const getBookingsAll = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, booking_service_1.getAllBookings)();
    if (!result) {
        return next(new AppError_1.default('No Data Found', 404));
    }
    res.status(201).json({
        success: 'true',
        statusCode: 200,
        message: 'All bookings retrieved successfully',
        data: result
    });
});
exports.getBookingsAll = getBookingsAll;
const getMyBookings = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const userId = (_b = req === null || req === void 0 ? void 0 : req.user) === null || _b === void 0 ? void 0 : _b.id;
    const result = yield (0, booking_service_1.myBookingsGet)(userId);
    if (!result) {
        return next(new AppError_1.default('No Data Found', 404));
    }
    res.status(201).json({
        success: 'true',
        statusCode: 200,
        message: 'User bookings retrieved successfully',
        data: result
    });
});
exports.getMyBookings = getMyBookings;
