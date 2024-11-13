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
exports.conCtrComment = void 0;
const sevice_1 = require("../sevice");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
exports.conCtrComment = {
    getCommentByMovie: (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { movie_id } = req.params;
        const { success, data } = yield sevice_1.handleComment.getCommentOfMovie(movie_id);
        res.status(200).json({
            success,
            response: data
        });
    })),
    getCommentOfSeri: (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { seri_Id } = req.params;
        const { success, response } = yield sevice_1.handleComment.getCommentOFSeri(seri_Id);
        res.status(200).json({
            success,
            response
        });
    })),
    addComment: (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('data', req.body);
        const { success, response } = yield sevice_1.handleComment.addComment(req.body);
        res.status(200).json({
            success,
            response
        });
    })),
    delete: (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id, user_id } = req.params;
        const { success, message } = yield sevice_1.handleComment.deleteComment(id, user_id);
        res.status(200).json({
            success,
            message
        });
    }))
};
