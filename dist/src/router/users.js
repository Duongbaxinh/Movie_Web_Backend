"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const controller_1 = require("../controller");
const route = (0, express_1.Router)();
route.use((0, cookie_parser_1.default)());
route.use(body_parser_1.default.json());
route.get('/users', controller_1.controllerUser.getUser);
route.post('/users/register', controller_1.controllerUser.register);
route.post('/users/login', controller_1.controllerUser.login);
route.get('/users/logout', controller_1.controllerUser.logOut);
route.get('/auth/google', passport_1.default.authenticate('google', { scope: ['email', 'profile'] }), (req, res) => {
    console.log('kdfjsk');
});
route.get('/auth/google/callback', passport_1.default.authenticate('google', { successRedirect: '/api/v1/sucessfull' }));
route.get('/sucessfull', (req, res) => {
    const user = { id: String, name: String, emails: String };
    user.id = req.user.id;
    user.name = req.user.displayName;
    user.emails = req.user.emails[0].value;
    res.cookie('user', JSON.stringify(user));
    res.redirect('http://localhost:5173');
});
exports.default = route;
