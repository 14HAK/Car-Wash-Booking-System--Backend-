"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const userRouter = express_1.default.Router();
userRouter.route('/auth/signup').post(user_controller_1.userSignup);
userRouter.route('/auth/login').post(user_controller_1.userLogin);
exports.default = userRouter;
