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
exports.seri = void 0;
const models_1 = __importDefault(require("../models"));
exports.seri = {
    getSeri: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield models_1.default.Seri.findAll({
                include: [{ model: models_1.default.Movie }],
            });
            console.log("check data seris", data);
            return {
                success: data ? true : false,
                data: data ? data : null,
            };
        }
        catch (error) {
            return {
                success: false,
                message: error,
            };
        }
    }),
    getSeriById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield models_1.default.Seri.findOne({
                where: { id: id },
                include: [
                    {
                        model: models_1.default.Movie,
                    },
                ],
            });
            return {
                success: data ? true : false,
                data: data ? data : null,
            };
        }
        catch (error) {
            return {
                success: false,
                error: error,
            };
        }
    }),
    addSeri: (_a) => __awaiter(void 0, void 0, void 0, function* () {
        var { fileName } = _a, data = __rest(_a, ["fileName"]);
        console.log("check file Name", data);
        try {
            const newSeri = yield models_1.default.Seri.create(Object.assign({}, data));
            if (!newSeri)
                throw Error("something went wrong");
            return "ok";
        }
        catch (error) {
            console.log(error);
        }
    }),
    updateSeri: (_b) => __awaiter(void 0, void 0, void 0, function* () {
        var { id } = _b, data = __rest(_b, ["id"]);
        try {
            console.log("id", id);
            yield models_1.default.Seri.update(Object.assign({}, data), { where: { id: id } });
            return {
                message: "updated successfull",
            };
        }
        catch (error) {
            return {
                error: error,
            };
        }
    }),
    deleteSeri: (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield models_1.default.Seri.destroy({ where: { id: id } });
            return {
                message: "seri was deleted",
            };
        }
        catch (error) {
            return {
                error: error,
            };
        }
    }),
};
