import { seri } from "../sevice";
import db from "../models";
const seridata = require("./seridata.json");
import asyncHandler from "express-async-handler";
export const conTrollerSeri = {
  getSeri: asyncHandler(async (req: any, res: any) => {
    const { data }: any = await seri.getSeri();
    res.status(200).json({
      metadata: data,
    });
  }),
  insertSeri: asyncHandler(async (req: any, res: any) => {
    seridata.map(async (item: any) => {
      await db.Seri.create({ ...item });
    });
    res.send("sucess ");
  }),
  getSeriById: asyncHandler(async (req: any, res: any) => {
    console.log("params", req.params.id);
    const { data, success }: any = await seri.getSeriById(req.params.id);
    res.status(200).json({
      metadata: data,
    });
  }),
  addSeri: asyncHandler(async (req: any, res: any) => {
    const metadata = await seri.addSeri(req.body);
    res.status(200).json({
      metadata,
    });
  }),
  updateSeri: asyncHandler(async (req: any, res: any) => {
    const metadata = await seri.updateSeri(req.body);
    res.status(200).json({
      metadata,
    });
  }),
  deleteSeri: asyncHandler(async (req: any, res: any) => {
    const { data }: any = await seri.deleteSeri(req.query.id);
    res.status(200).json({
      data,
    });
  }),
};
