import asyncHandler from "express-async-handler";
export const handleUploadFile = (req: any, res: any, next: any) => {
  const getExFile = (file: any) => {
    return file.fieldname;
  };
  const fileName = [
    {
      video: {
        type: "video",
        typeOf: "video",
        name: "",
      },
      avatar: {
        type: "image",
        typeOf: "avatar",
        name: "",
      },
      trailler: {
        type: "video",
        typeOf: "trailler",
        name: "",
      },
    },
  ];
  if (Object.keys(req.files).length > 0) {
    const files = req.files;
    for (let i in files) {
      req.body[i] = files[i][0].path;
      if (getExFile(files[i][0]) === "video") {
        fileName[0]["video"].name = files[i][0].filename;
      }
      if (getExFile(files[i][0]) === "trailler") {
        fileName[0]["trailler"].name = files[i][0].filename;
      }
      if (getExFile(files[i][0]) === "avatar") {
        fileName[0]["avatar"].name = files[i][0].filename;
      }
    }
    req.body.fileName = fileName;
  } else {
    req.body.fileName = null;
  }
  next();
};
