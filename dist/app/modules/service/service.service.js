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
exports.serviceDelete = exports.serviceUpdate = exports.serviceAll = exports.serviceGetById = exports.servicesCreate = void 0;
const service_model_1 = __importDefault(require("./service.model"));
const servicesCreate = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_model_1.default.create(Object.assign({}, data));
    return result;
});
exports.servicesCreate = servicesCreate;
const serviceGetById = (ID) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_model_1.default.findOne({ _id: ID });
    return result;
});
exports.serviceGetById = serviceGetById;
const serviceAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_model_1.default.find();
    return result;
});
exports.serviceAll = serviceAll;
const serviceUpdate = (ID, data) => __awaiter(void 0, void 0, void 0, function* () {
    let response = '';
    const id = { _id: ID };
    const updatedData = Object.assign({}, data);
    const options = { new: true };
    const result = yield service_model_1.default.findByIdAndUpdate(id, updatedData, options);
    response = result;
    return response;
});
exports.serviceUpdate = serviceUpdate;
const serviceDelete = (ID) => __awaiter(void 0, void 0, void 0, function* () {
    let response = '';
    const id = { _id: ID };
    const updatedData = { isDeleted: true };
    const options = { new: true };
    const result = yield service_model_1.default.findByIdAndUpdate(id, updatedData, options);
    response = result;
    return response;
});
exports.serviceDelete = serviceDelete;
