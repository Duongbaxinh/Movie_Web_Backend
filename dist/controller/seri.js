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
exports.conTrollerSeri = void 0;
const sevice_1 = require("../sevice");
const models_1 = __importDefault(require("../models"));
const seridata = require("./seridata.json");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
exports.conTrollerSeri = {
    getSeri: (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { data } = yield sevice_1.seri.getSeri();
        res.status(200).json({
            metadata: data,
        });
    })),
    insertSeri: (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        seridata.map((item) => __awaiter(void 0, void 0, void 0, function* () {
            yield models_1.default.Series.create(Object.assign({}, item));
        }));
        res.send("sucess ");
    })),
    getSeriById: (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("params", req.params.id);
        const { data, success } = yield sevice_1.seri.getSeriById(req.params.id);
        res.status(200).json({
            metadata: data,
        });
    })),
    addSeri: (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const metadata = yield sevice_1.seri.addSeri(req.body);
        res.status(200).json({
            metadata,
        });
    })),
    updateSeri: (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const metadata = yield sevice_1.seri.updateSeri(req.body);
        res.status(200).json({
            metadata,
        });
    })),
    deleteSeri: (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { data } = yield sevice_1.seri.deleteSeri(req.query.id);
        res.status(200).json({
            data,
        });
    })),
};
