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
exports.controllerUser = void 0;
const sevice_1 = require("../sevice");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
exports.controllerUser = {
    register: (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { message, success } = yield sevice_1.handleUser.register(req.body);
        res.status(200).json({
            success,
            message
        });
    })),
    login: (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { success, message, accessToken, user, refreshToken } = yield sevice_1.handleUser.login(req.body);
        res.cookie('refreshToken', '12345');
        const co = req.cookies.refreshToken;
        console.log(co);
        res.status(200).json({
            success,
            message,
            response: user,
            accessToken,
            co
        });
    })),
    logOut: (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const cookieData = req.cookies;
        console.log("refreshToken", cookieData.refreshToken);
        if (cookieData && cookieData.refreshToken) {
            const { success, message } = yield sevice_1.handleUser.logOut(cookieData.refreshToken);
            res.clearCookie('refreshToken', { httpOnly: true });
            res.status(200).json({
                success,
                message,
            });
        }
        else {
            res.status(200).json({
                success: false,
                message: "you haven't login"
            });
        }
    }))
};
