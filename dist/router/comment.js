"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = (0, express_1.Router)();
const controller_1 = require("../controller");
route.get('/comments/:movie_id', controller_1.conCtrComment.getCommentByMovie);
route.get('/comments/seris/:seri_Id', controller_1.conCtrComment.getCommentOfSeri);
route.post('/comments', controller_1.conCtrComment.addComment);
route.delete('/comments/:id/:user_id', controller_1.conCtrComment.delete);
exports.default = route;
