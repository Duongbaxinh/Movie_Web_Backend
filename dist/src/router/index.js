"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const movies_1 = __importDefault(require("./movies"));
const seri_1 = __importDefault(require("./seri"));
const users_1 = __importDefault(require("./users"));
const comment_1 = __importDefault(require("./comment"));
const initRouter = (app) => {
    app.use('/api/v1/', movies_1.default);
    app.use('/api/v1/', users_1.default);
    app.use('/api/v1/', seri_1.default);
    app.use('/api/v1/', comment_1.default);
    app.use((req, res) => res.sendStatus(404));
};
exports.default = initRouter;
