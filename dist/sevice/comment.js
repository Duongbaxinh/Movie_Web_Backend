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
exports.handleComment = void 0;
const models_1 = __importDefault(require("../models"));
exports.handleComment = {
    getCommentOfMovie: (id_Movie) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const comments = yield models_1.default.Comment.findAll({
                where: { MovieId: id_Movie },
                attributes: ["content"],
                include: [{ model: models_1.default.User, attributes: ["avatar", "email"] }],
                separate: true,
            });
            return {
                success: comments ? true : false,
                data: comments ? comments : null,
            };
        }
        catch (error) {
            console.log(error);
            return {
                success: false,
                err: error,
            };
        }
    }),
    getCommentOFSeri: (seri_id) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("seri id ", seri_id);
        try {
            const commentSeri = yield models_1.default.Comment.findAll({
                where: { SeriId: seri_id },
                attributes: ["content"],
                include: [
                    {
                        model: models_1.default.User,
                        attributes: ["avatar", "email"],
                    },
                ],
            });
            return {
                success: commentSeri ? true : false,
                response: commentSeri ? commentSeri : null,
            };
        }
        catch (error) {
            return {
                success: false,
                response: error,
            };
        }
    }),
    addComment: (data) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newComment = yield models_1.default.Comment.create(Object.assign({}, data));
            return {
                success: newComment ? true : false,
                message: newComment ? "comment was added" : "something went wrong",
            };
        }
        catch (error) {
            return {
                success: false,
                err: error,
            };
        }
    }),
    deleteComment: (id, id_user) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const commentDelete = yield models_1.default.Comment.destroy({
                where: { id: id, UserId: id_user },
            });
            return {
                success: commentDelete ? true : false,
                message: commentDelete ? "comment was deleted" : "something went wrong",
            };
        }
        catch (error) { }
    }),
};
