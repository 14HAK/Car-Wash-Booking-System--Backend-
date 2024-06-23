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
exports.myBookingsGet = exports.getAllBookings = exports.bookingGet = exports.bookingsCreate = void 0;
const booking_model_1 = __importDefault(require("./booking.model"));
const bookingsCreate = (bookingData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.default.create(Object.assign({}, bookingData));
    return result;
});
exports.bookingsCreate = bookingsCreate;
const bookingGet = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.default.find()
        .populate('user')
        .populate('service')
        .populate('slot');
    return result;
});
exports.bookingGet = bookingGet;
const getAllBookings = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.default.find()
        .populate('user')
        .populate('service')
        .populate('slot');
    return result;
});
exports.getAllBookings = getAllBookings;
const myBookingsGet = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.default.findById({ _id: userId })
        .populate('user')
        .populate('service')
        .populate('slot');
    return result;
});
exports.myBookingsGet = myBookingsGet;
