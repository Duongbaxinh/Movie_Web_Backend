"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
module.exports = {
    development: {
        username: "root",
        password: "123456",
        database: "web_movie",
        host: "127.0.0.1",
        dialect: "mysql",
        logging: false,
    },
    test: {
        username: "root",
        password: null,
        database: "database_test",
        host: "127.0.0.1",
        dialect: "mysql",
    },
    production: {
        username: process.env.DB_USER || "avnadmin",
        password: process.env.DB_PASS,
        database: "movies",
        host: process.env.DB_HOST ||
            "mysql-182751c1-duongbaxinh2021-7e43.d.aivencloud.com",
        port: process.env.DB_PORT || 25482,
        dialect: "mysql",
    },
};
