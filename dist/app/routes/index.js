"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const service_router_1 = __importDefault(require("../modules/service/service.router"));
const slot_router_1 = __importDefault(require("../modules/slot/slot.router"));
const booking_router_1 = __importDefault(require("../modules/booking/booking.router"));
const user_router_1 = __importDefault(require("../modules/auth/user.router"));
const router = express_1.default.Router();
const modularRouter = [
    {
        path: '/',
        route: user_router_1.default
    },
    {
        path: '/',
        route: service_router_1.default
    },
    {
        path: '/',
        route: slot_router_1.default
    },
    {
        path: '/',
        route: booking_router_1.default
    }
];
modularRouter.forEach((route) => router.use(route.path, route.route));
exports.default = router;
