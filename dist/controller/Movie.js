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
exports.ControllerMovie = void 0;
const sevice_1 = require("../sevice");
const data = require("./data.json");
const models_1 = __importDefault(require("../models"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
exports.ControllerMovie = {
    searchMovie: (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { data } = yield sevice_1.handleMovie.searchFilm(req.query);
        res.status(200).json({
            response: data,
        });
    })),
    getAllMovie: (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { data } = yield sevice_1.handleMovie.getAllMovie();
        console.log("check data movie", data);
        res.status(200).json({
            metadata: data,
        });
    })),
    getMovieByPk: (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { data, success } = yield sevice_1.handleMovie.getMovieById(req.params.id);
        res.status(200).json({
            success,
            metadata: data,
        });
    })),
    createMovie: (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield sevice_1.handleMovie.addMovie(req.body, req.files);
        res.status(200).json({
            data,
        });
    })),
    updateMovies: (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const data = yield sevice_1.handleMovie.updateFilm(req.body, id);
        res.status(200).json({
            data,
        });
    })),
    deleteMovie: (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield sevice_1.handleMovie.deleteMovie(req.params.id);
        res.status(200).json({
            response,
        });
    })),
    insert: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            data.map((item) => __awaiter(void 0, void 0, void 0, function* () {
                yield models_1.default.Movie.create(Object.assign({}, item));
            }));
            res.status(200).json({
                message: "successful",
            });
        }
        catch (error) {
            console.log(error);
        }
    }),
};
