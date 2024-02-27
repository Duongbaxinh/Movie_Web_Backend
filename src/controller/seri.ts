import { seri } from "../sevice";
import db from "../models";
const seridata = require("./seridata.json");
import asyncHanle from "express-async-handler";
export const conTrollerSeri = {
  getSeri: asyncHanle(async (req: any, res: any) => {
    const { data }: any = await seri.getSeri();
    res.status(200).json({
      response: data,
    });
  }),
  insertSeri: asyncHanle(async (req: any, res: any) => {
    console.log("run at here");
    seridata.map(async (item: any) => {
      await db.Seri.create({ ...item });
    });
    res.send("sucess ");
  }),
  getSeriById: asyncHanle(async (req: any, res: any) => {
    console.log("params", req.params.id);
    const { data, success }: any = await seri.getSeriById(req.params.id);
    res.status(200).json({
      response: data,
    });
  }),
  addSeri: asyncHanle(async (req: any, res: any) => {
    const response = await seri.addSeri(req.body);
    res.status(200).json({
      response,
    });
  }),
  updateSeri: asyncHanle(async (req: any, res: any) => {
    const response = await seri.updateSeri(req.body);
    res.status(200).json({
      response,
    });
  }),
  deleteSeri: asyncHanle(async (req: any, res: any) => {
    const { data }: any = await seri.deleteSeri(req.query.id);
    res.status(200).json({
      data,
    });
  }),
};
