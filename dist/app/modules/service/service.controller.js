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
exports.deleteService = exports.updateService = exports.getAllServices = exports.getServiceById = exports.createServices = void 0;
const service_validation_1 = __importDefault(require("./service.validation"));
const service_service_1 = require("./service.service");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const mongoose_1 = __importDefault(require("mongoose"));
const createServices = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const rawData = yield req.body;
    const validateData = yield service_validation_1.default.parseAsync(rawData);
    const result = yield (0, service_service_1.servicesCreate)(validateData);
    if (!result) {
        return next(new AppError_1.default('data created unsuccessful', 500));
    }
    res.status(201).json({
        success: 'true',
        statusCode: 200,
        message: 'Service created successfully',
        data: result
    });
});
exports.createServices = createServices;
const getServiceById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const ID = req.params.id;
    const isValidObjectId = mongoose_1.default.Types.ObjectId.isValid(ID);
    if (!isValidObjectId) {
        return next(new AppError_1.default('invalid objectid', 400));
    }
    const result = yield (0, service_service_1.serviceGetById)(ID);
    if (!result) {
        return next(new AppError_1.default('No Data Found', 404));
    }
    res.status(200).json({
        success: 'true',
        statusCode: 200,
        message: 'Service retrieved successfully',
        data: result
    });
});
exports.getServiceById = getServiceById;
const getAllServices = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, service_service_1.serviceAll)();
    if (!result) {
        return next(new AppError_1.default('No Data Found', 404));
    }
    res.status(200).json({
        success: 'true',
        statusCode: 200,
        message: 'Services retrieved successfully',
        data: result
    });
});
exports.getAllServices = getAllServices;
const updateService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const ID = req.params.id;
    const data = req.body;
    const isValidObjectId = mongoose_1.default.Types.ObjectId.isValid(ID);
    if (!isValidObjectId) {
        return next(new AppError_1.default('invalid objectid', 400));
    }
    const result = yield (0, service_service_1.serviceUpdate)(ID, data);
    if (!result) {
        return next(new AppError_1.default('No Data Found', 404));
    }
    res.status(200).json({
        success: 'true',
        statusCode: 200,
        message: 'Service updated successfully',
        data: result
    });
});
exports.updateService = updateService;
const deleteService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const ID = req.params.id;
    const isValidObjectId = mongoose_1.default.Types.ObjectId.isValid(ID);
    if (!isValidObjectId) {
        return next(new AppError_1.default('invalid objectid', 400));
    }
    const result = yield (0, service_service_1.serviceDelete)(ID);
    if (!result) {
        return next(new AppError_1.default('No Data Found', 404));
    }
    res.status(200).json({
        success: 'true',
        statusCode: 200,
        message: 'Service deleted successfully',
        data: result
    });
});
exports.deleteService = deleteService;
