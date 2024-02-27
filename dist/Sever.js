"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
// import cors from 'cors'
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const morgan_1 = __importDefault(require("morgan"));
const passport_1 = __importDefault(require("passport"));
const router_1 = __importDefault(require("./router"));
require('./middleweare/loginByGoogle');
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT_SEVER || 3000;
app.use((0, cookie_parser_1.default)());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
});
// const corsOption = {
//   credentials: true,
//   origin: "http://127.0.0.1:5173"
// }
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, express_session_1.default)({ secret: "cats" }));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
// app.use(cors(corsOption))
app.use((0, morgan_1.default)('dev'));
(0, router_1.default)(app);
app.listen(port, () => {
    console.log("app run at", port);
});
