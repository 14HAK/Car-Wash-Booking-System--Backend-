"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../../middlewares/authMiddleware");
const isUser_1 = require("../../middlewares/isUser");
const booking_controller_1 = require("./booking.controller");
const bookingRouter = express_1.default.Router();
bookingRouter
    .route('/bookings')
    .post(authMiddleware_1.authMiddleware, isUser_1.isUser, booking_controller_1.createBookings)
    .get(booking_controller_1.getBookingsAll);
bookingRouter.route('/bookings/my-bookings').get(authMiddleware_1.authMiddleware, isUser_1.isUser, booking_controller_1.getMyBookings);
exports.default = bookingRouter;
