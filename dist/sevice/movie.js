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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleMovie = void 0;
const sequelize_1 = require("sequelize");
const models_1 = __importDefault(require("../models"));
const handleDeleteFile_1 = require("../handle/handleDeleteFile");
const { Movie, FileVideo, FileImage } = models_1.default;
exports.handleMovie = {
    searchFilm: ({ name, limit, ofset }) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("check name movie ::: ", name);
        try {
            const queryOptions = { raw: true, nest: true };
            const queryCondition = {};
            if (name)
                queryCondition.mainName = { [sequelize_1.Op.startsWith]: name };
            limit ? (queryOptions.limit = +limit) : (queryOptions.limit = 5);
            ofset ? (queryOptions.ofset = ofset) : (queryOptions.ofset = 1);
            const { count, rows } = yield Movie.findAndCountAll(Object.assign(Object.assign({ where: Object.assign({}, queryCondition) }, queryOptions), { attributes: {
                    exclude: ["createdAt", "updatedAt"],
                } }));
            return {
                message: count,
                data: rows,
            };
        }
        catch (error) {
            return {
                message: error,
            };
        }
    }),
    getAllMovie: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield Movie.findAll();
            return {
                mressage: "sucessfull",
                data: data,
            };
        }
        catch (error) {
            console.log(error);
            return {
                mess: error,
            };
        }
    }),
    getMovieById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield Movie.findOne({
                where: { id: id },
                include: [{ model: models_1.default.Series, as: "seriData", attributes: ["title"] }],
            });
            return {
                success: true,
                data: data,
            };
        }
        catch (error) {
            console.log(error);
            throw new Error("get movie by id falure");
        }
    }),
    addMovie: (_a, files) => __awaiter(void 0, void 0, void 0, function* () {
        var { fileName } = _a, data = __rest(_a, ["fileName"]);
        try {
            let createMovie;
            const movie = yield Movie.findOne({ where: { name: data.name } });
            if (!movie) {
                createMovie = yield Movie.create(Object.assign({}, data));
                if (!createMovie)
                    throw new Error("something went wrong");
            }
            return {
                status: createMovie ? "success" : "falure",
                data: createMovie,
            };
        }
        catch (error) {
            console.log(error);
        }
    }),
    updateFilm: (_b, id) => __awaiter(void 0, void 0, void 0, function* () {
        var { fileName } = _b, data = __rest(_b, ["fileName"]);
        console.log("check id film", id);
        try {
            const existedMovie = yield Movie.findOne({ where: { id: id } });
            if (!existedMovie)
                throw Error("find movie falure");
            console.log("existed movie", existedMovie.id);
            yield Movie.update(Object.assign({}, data), { where: { id: id } });
            return {
                status: "ok",
            };
        }
        catch (error) {
            return { message: error };
        }
    }),
    deleteMovie: (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const movie = yield Movie.findOne({ where: { id: id } });
            if (movie) {
                yield Movie.destroy({ where: { id: id } });
                const [fileVideo, fileImage] = yield Promise.all([
                    FileImage.findAll({ where: { movie_Id: id }, attributes: ["image"] }),
                    FileVideo.findAll({ where: { movie_Id: id }, attributes: ["video"] }),
                ]);
                yield Promise.all([
                    FileImage.destroy({ where: { movie_Id: id } }),
                    FileVideo.destroy({ where: { movie_Id: id } }),
                ]);
                const fileAll = [...fileVideo, ...fileImage];
                Promise.all(fileAll.map((item) => {
                    if (Object.values(item.dataValues)[0]) {
                        (0, handleDeleteFile_1.handleDeleteFile)(Object.values(item.dataValues)[0], Object.keys(item.dataValues)[0]);
                    }
                }));
                return {
                    success: true,
                    message: "a movie was deleted",
                    data: fileAll,
                };
            }
            return {
                success: false,
                message: "the movie is not in the database",
            };
        }
        catch (error) {
            return {
                success: false,
                message: error,
            };
        }
    }),
};
