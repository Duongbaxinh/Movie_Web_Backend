"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controller");
const handleUploadFileSeri_1 = require("../middleweare/handleUploadFileSeri");
const upload_1 = __importDefault(require("../middleweare/upload"));
const route = (0, express_1.Router)();
route.get("/seris/insert", controller_1.conTrollerSeri.insertSeri);
route.get("/seris/:id", controller_1.conTrollerSeri.getSeriById);
route.get("/seris", controller_1.conTrollerSeri.getSeri);
route.post("/seris", upload_1.default.fields([
    { name: "banner" },
    { name: "thumbnail" },
    { name: "avatar" },
]), handleUploadFileSeri_1.handleUploadFileSeri, controller_1.conTrollerSeri.addSeri);
route.put("/seris", upload_1.default.fields([
    { name: "banner" },
    { name: "thumbnail" },
    { name: "avatar" },
]), handleUploadFileSeri_1.handleUploadFileSeri, controller_1.conTrollerSeri.updateSeri);
route.delete("/seris/:id", controller_1.conTrollerSeri.deleteSeri);
exports.default = route;
