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
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDeleteFile = void 0;
const cloudinary_1 = require("cloudinary");
const handleDeleteFile = (fileId, typeFile) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('name delete', fileId, 'type', typeFile);
        const check = yield cloudinary_1.v2.uploader.destroy(fileId, { resource_type: typeFile });
        if (check) {
            console.log('delete sucessfull');
        }
        else {
            console.log('false');
        }
    }
    catch (error) {
        return error;
    }
});
exports.handleDeleteFile = handleDeleteFile;
