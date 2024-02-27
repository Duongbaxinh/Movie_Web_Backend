"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = require("express");
const controller_1 = require("../controller");
const handleFileUpload_1 = require("../middleweare/handleFileUpload");
const upload_1 = __importDefault(require("../middleweare/upload"));
const route = (0, express_1.Router)();
route.use(body_parser_1.default.json());
route.get("/movies/:id", controller_1.ControllerMovie.getMovieByPk);
route.get("/movies", controller_1.ControllerMovie.getAllMovie);
route.get("/search", controller_1.ControllerMovie.searchMovie);
route.post("/movies", upload_1.default.fields([{ name: "avatar" }, { name: "video" }, { name: "trailler" }]), handleFileUpload_1.handleUploadFile, controller_1.ControllerMovie.createMovie);
route.put("/movies/:id", 
//   [verifyUser],
upload_1.default.fields([{ name: "avatar" }, { name: "video" }, { name: "trailler" }]), handleFileUpload_1.handleUploadFile, controller_1.ControllerMovie.updateMovies);
route.delete("/movies/:id", controller_1.ControllerMovie.deleteMovie);
route.get("/inserts", controller_1.ControllerMovie.insert);
exports.default = route;
