"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("./user.controller");
const express_1 = __importDefault(require("express"));
const userRouter = express_1.default.Router();
userRouter.route('/get-user').post().get(user_controller_1.getUsers);
exports.default = userRouter;
