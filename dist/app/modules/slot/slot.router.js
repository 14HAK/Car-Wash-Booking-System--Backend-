"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../../middlewares/authMiddleware");
const isAdmin_1 = require("../../middlewares/isAdmin");
const slot_controller_1 = require("./slot.controller");
const slotRouter = express_1.default.Router();
slotRouter.route('/services/slots').post(authMiddleware_1.authMiddleware, isAdmin_1.isAdmin, slot_controller_1.createSlots);
slotRouter.route('/slots/availability/:serviceId?').get(slot_controller_1.availableSlots);
exports.default = slotRouter;
