"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const service_controller_1 = require("./service.controller");
const authMiddleware_1 = require("../../middlewares/authMiddleware");
const isAdmin_1 = require("../../middlewares/isAdmin");
const serviceRouter = express_1.default.Router();
serviceRouter
    .route('/services')
    .post(authMiddleware_1.authMiddleware, isAdmin_1.isAdmin, service_controller_1.createServices)
    .get(service_controller_1.getAllServices);
serviceRouter
    .route('/services/:id?')
    .get(service_controller_1.getServiceById)
    .put(authMiddleware_1.authMiddleware, isAdmin_1.isAdmin, service_controller_1.updateService)
    .delete(authMiddleware_1.authMiddleware, isAdmin_1.isAdmin, service_controller_1.deleteService);
exports.default = serviceRouter;
