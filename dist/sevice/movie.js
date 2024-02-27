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
            return ({
                message: count,
                data: rows,
            });
        }
        catch (error) {
            return ({
                message: error,
            });
        }
    }),
    getAllMovie: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield Movie.findAll({
            // include: [
            //   { model: db.Seri, as: "seriData", },
            //   { model: db.FileImage, attributes: ['image'] },
            //   { model: db.FileVideo, attributes: ['video'] }]
            });
            return ({
                mressage: "sucessfull",
                data: data,
            });
        }
        catch (error) {
            return ({
                mess: error,
            });
        }
    }),
    getMovieById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield Movie.findOne({
                where: { id: id },
                // include: [{
                // model: db.FileImage, attributes: ['name']
                // model: db.Country,
                // attributes: ["name"],
                // through: { attributes: [] },
                // }, { model: db.FileVideo }],
            });
            return ({
                success: true,
                data: data,
            });
        }
        catch (error) {
            return ({
                message: "false",
                error: error,
            });
        }
    }),
    addMovie: (_a, files) => __awaiter(void 0, void 0, void 0, function* () {
        var { fileName } = _a, data = __rest(_a, ["fileName"]);
        try {
            const movie = yield Movie.findOne({ where: { name: data.name } });
            if (!movie && fileName) {
                const newMovie = yield Movie.create(Object.assign({}, data));
                for (let i in fileName[0]) {
                    const { type, typeOf, name } = fileName[0][i];
                    if (name && type === 'video') {
                        yield FileVideo.create({ movie_Id: newMovie.id, video: fileName[0][i].name, typeOf: typeOf });
                    }
                    if (name && type === 'image') {
                        yield FileImage.create({ movie_Id: newMovie.id, image: name, typeOf: typeOf });
                    }
                }
                return ({
                    success: newMovie ? true : false,
                    message: newMovie ? "a movie created" : 'movie had in database',
                });
            }
            if (movie && fileName) {
                for (let i in fileName[0]) {
                    const { type, name } = fileName[0][i];
                    if (name) {
                        (0, handleDeleteFile_1.handleDeleteFile)(name, type);
                    }
                }
                return ({
                    success: false,
                    message: 'movie had in database',
                });
            }
        }
        catch (error) {
            if (error && fileName) {
                for (let i in fileName[0]) {
                    const { type, name } = fileName[0][i];
                    if (name) {
                        (0, handleDeleteFile_1.handleDeleteFile)(name, type);
                    }
                }
                return ({
                    success: false,
                    message: error,
                });
            }
        }
    }),
    updateFilm: (_b) => __awaiter(void 0, void 0, void 0, function* () {
        var { fileName } = _b, data = __rest(_b, ["fileName"]);
        /**const fileName = [{
          video: { type: 'video', typeOf: 'video', name: '' },
          avatar: { type: 'image', typeOf: 'avatar', name: '' },
          trailler: { type: 'video', typeOf: 'trailler', name: '' }
        }]*/
        try {
            const updeateMovie = yield Movie.update(Object.assign({}, data), { where: { id: data.id } });
            if (updeateMovie && fileName) {
                for (let i in fileName[0]) {
                    const { type, typeOf, name } = fileName[0][i];
                    if (name !== '' && type === 'video') {
                        const fileNameVideo = yield FileVideo.findOne({ where: { movie_Id: data.id, typeOf: typeOf } });
                        if (fileNameVideo) {
                            const updateMovie = yield FileVideo.update({ video: name }, { where: { id: fileNameVideo.id, typeOf: typeOf } });
                            if (updateMovie) {
                                (0, handleDeleteFile_1.handleDeleteFile)(fileNameVideo.video, type);
                            }
                        }
                        else {
                            yield FileVideo.create({ movie_Id: data.id, video: name, typeOf: typeOf });
                        }
                    }
                    if (name !== '' && type === 'image') {
                        const fileNameImage = yield FileImage.findOne({ where: { movie_Id: data.id, typeOf: typeOf } });
                        if (fileNameImage) {
                            const updateImage = FileImage.update({ image: name }, { where: { id: fileNameImage.id, typeOf: typeOf } });
                            if (updateImage) {
                                (0, handleDeleteFile_1.handleDeleteFile)(fileNameImage.image, type);
                            }
                        }
                        else {
                            yield FileImage.create({ movie_Id: data.id, image: name, typeOf: typeOf });
                        }
                    }
                }
                return ({
                    success: true,
                    message: 'movie was updated',
                });
            }
        }
        catch (error) {
            return ({ message: error, });
        }
    }),
    deleteMovie: (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const movie = yield Movie.findOne({ where: { id: id } });
            if (movie) {
                yield Movie.destroy({ where: { id: id } });
                const [fileVideo, fileImage] = yield Promise.all([
                    FileImage.findAll({ where: { movie_Id: id }, attributes: ['image'] }),
                    FileVideo.findAll({ where: { movie_Id: id }, attributes: ['video'] })
                ]);
                yield Promise.all([
                    FileImage.destroy({ where: { movie_Id: id } }),
                    FileVideo.destroy({ where: { movie_Id: id } }),
                ]);
                const fileAll = [...fileVideo, ...fileImage];
                yield Promise.all(fileAll.map((item) => {
                    if (Object.values(item.dataValues)[0]) {
                        (0, handleDeleteFile_1.handleDeleteFile)(Object.values(item.dataValues)[0], Object.keys(item.dataValues)[0]);
                    }
                }));
                return {
                    success: true,
                    message: "a movie was deleted",
                    data: fileAll
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
    })
};
