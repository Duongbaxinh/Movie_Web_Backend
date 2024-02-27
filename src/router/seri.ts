import { Router } from "express";
import { conTrollerSeri } from "../controller";
import { handleUploadFileSeri } from "../middleweare/handleUploadFileSeri";
import upload from "../middleweare/upload";
const route = Router();
route.get("/seris/insert", conTrollerSeri.insertSeri);
route.get("/seris/:id", conTrollerSeri.getSeriById);
route.get("/seris", conTrollerSeri.getSeri);
route.post(
  "/seris",
  upload.fields([
    { name: "banner" },
    { name: "thumbnail" },
    { name: "avatar" },
  ]),
  handleUploadFileSeri,
  conTrollerSeri.addSeri
);
route.put(
  "/seris",
  upload.fields([
    { name: "banner" },
    { name: "thumbnail" },
    { name: "avatar" },
  ]),
  handleUploadFileSeri,
  conTrollerSeri.updateSeri
);
route.delete("/seris/:id", conTrollerSeri.deleteSeri);
export default route;
