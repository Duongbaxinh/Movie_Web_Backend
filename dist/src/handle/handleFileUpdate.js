"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleFileUpdate = void 0;
const cloudinary_1 = require("cloudinary");
const handleFileUpdate = (fileName, type) => {
    cloudinary_1.v2.uploader.destroy(fileName, { resource_type: type });
};
exports.handleFileUpdate = handleFileUpdate;
