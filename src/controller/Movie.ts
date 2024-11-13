import { handleMovie } from "../sevice";
const data = require("./data.json");
import db from "../models";
import asyncHandler from "express-async-handler";
export const ControllerMovie = {
  searchMovie: asyncHandler(async (req: any, res: any) => {
    console.log("chkkkk::::", req.query);
    const { data }: any = await handleMovie.searchFilm(req.query);
    res.status(200).json({
      metadata: data,
    });
  }),
  getAllMovie: asyncHandler(async (req: any, res: any) => {
    const { data }: any = await handleMovie.getAllMovie();
    console.log("check data movie", data);
    res.status(200).json({
      metadata: data,
    });
  }),
  getMovieByPk: asyncHandler(async (req: any, res: any) => {
    const { data, success }: any = await handleMovie.getMovieById(
      req.params.id
    );
    res.status(200).json({
      success,
      metadata: data,
    });
  }),
  createMovie: asyncHandler(async (req: any, res: any) => {
    const data = await handleMovie.addMovie(req.body, req.files);
    res.status(200).json({
      data,
    });
  }),
  updateMovies: asyncHandler(async (req: any, res: any) => {
    const { id } = req.params;
    const data = await handleMovie.updateFilm(req.body, id);
    res.status(200).json({
      data,
    });
  }),
  deleteMovie: asyncHandler(async (req: any, res: any) => {
    const response = await handleMovie.deleteMovie(req.params.id);
    res.status(200).json({
      response,
    });
  }),

  insert: async (req: any, res: any) => {
    try {
      data.map(async (item: any) => {
        await db.Movie.create({ ...item });
      });
      res.status(200).json({
        message: "successful",
      });
    } catch (error) {
      console.log(error);
    }
  },
};
