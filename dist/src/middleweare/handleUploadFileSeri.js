"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleUploadFileSeri = void 0;
const handleUploadFileSeri = (req, res, next) => {
    const getExFile = (file) => {
        return file.fieldname;
    };
    const fileName = [
        {
            banner: {
                type: "image",
                typeOf: "banner",
                name: "",
            },
            thumbai: {
                type: "image",
                typeOf: "thumbai",
                name: "",
            },
            main: {
                type: "image",
                typeOf: "main",
                name: "",
            },
        },
    ];
    if (req.files && Object.keys(req.files).length > 0) {
        const files = req.files;
        for (let i in files) {
            req.body[i] = files[i][0].path;
            if (getExFile(files[i][0]) === "banner") {
                fileName[0]["banner"].name = files[i][0].filename;
            }
            if (getExFile(files[i][0]) === "thumbai") {
                fileName[0]["thumbai"].name = files[i][0].filename;
            }
            if (getExFile(files[i][0]) === "main") {
                fileName[0]["main"].name = files[i][0].filename;
            }
        }
        req.body.fileName = fileName;
    }
    else {
        req.body.fileName = null;
    }
    next();
};
exports.handleUploadFileSeri = handleUploadFileSeri;
