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
exports.handleUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = __importDefault(require("../models"));
const { User } = models_1.default;
exports.handleUser = {
    register: ({ password, email }) => new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const [user, create] = yield User.findOrCreate({
                where: { email: email },
                defaults: { email: email, password: bcrypt_1.default.hashSync(password, 10) },
            });
            resolve({
                success: create ? true : false,
                message: create ? "your acount registed" : "acount existed",
            });
        }
        catch (error) {
            reject({
                error: error,
            });
        }
    })),
    login: ({ password, email }) => new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log("check username and password :::: ", password, email);
            const user = yield User.findOne({ where: { email: email } });
            if (user) {
                const isChecked = bcrypt_1.default.compareSync(password, user.password);
                if (isChecked) {
                    const _a = user.dataValues, { password, refreshToken, createdAt, updatedAt } = _a, rest = __rest(_a, ["password", "refreshToken", "createdAt", "updatedAt"]);
                    // const refreshTokens = Jwt.sign({ ...rest }, process.env.KEY_JWT!, {
                    //   expiresIn: "2d",
                    // });
                    // await User.update(
                    //   { refreshToken: refreshTokens },
                    //   { where: { email: user.email } }
                    // );
                    resolve({
                        message: "login successfull",
                        success: true,
                        user: rest,
                        accessToken: yield jsonwebtoken_1.default.sign(Object.assign({}, rest), process.env.KEY_JWT, {
                            expiresIn: "2h",
                        }),
                        //   refreshToken: refreshTokens,
                    });
                }
                resolve({
                    message: "login passowrd or usename incorect",
                    success: false,
                    user: null,
                    accessToken: null,
                });
            }
            else {
                resolve({
                    message: "account not exited",
                    success: false,
                    user: null,
                    accessToken: null,
                });
            }
        }
        catch (error) {
            console.log(error);
            reject({
                message: false,
            });
        }
    })),
    logOut: (refreshToken) => new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const up = yield User.update({ refreshToken: null }, { where: { refreshToken: refreshToken } });
            console.log("dskjfsfsf", up);
            resolve({
                success: true,
                message: "you logouted",
            });
        }
        catch (error) {
            reject({
                success: false,
                message: "something went wrong",
            });
        }
    })),
    getUsers: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield models_1.default.User.findAll({});
            return {
                data: data,
            };
        }
        catch (error) {
            console.log(error);
            return {
                error,
            };
        }
    }),
};
