"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes"));
const globalError_1 = __importDefault(require("./app/middlewares/globalError"));
const notFound_1 = __importDefault(require("./app/middlewares/notFound"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Test middleware
app.use((req, res, next) => {
    console.log(new Date().toISOString());
    next();
});
// modular route handlers
app.use('/api', routes_1.default);
app.get('/', (req, res) => {
    res.send('hello world!');
});
// Error Handler
app.use(globalError_1.default);
app.use(notFound_1.default);
exports.default = app;
