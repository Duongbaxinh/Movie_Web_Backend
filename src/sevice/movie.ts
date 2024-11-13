import { Op } from "sequelize";
import db from "../models";
import { handleDeleteFile } from "../handle/handleDeleteFile";

const { Movie, FileVideo, FileImage } = db;
interface typeOfMovie {
  id?: number;
  name: string;
  genre: string;
  price: number;
  release: number;
  rating: number;
  description: string;
  author: string;
  actor: string;
  time: number;
  avatar: string;
  video: string;
  fileName: any;
}
interface queryMovies {
  name?: string;
  limit?: string;
  ofset?: string;
}
export const handleMovie = {
  searchFilm: async ({ name, limit, ofset }: queryMovies) => {
    console.log("check name movie ::: ", name);
    try {
      const queryOptions: any = { raw: true, nest: true };
      const queryCondition: any = {};
      if (name) queryCondition.mainName = { [Op.startsWith]: name };
      limit ? (queryOptions.limit = +limit) : (queryOptions.limit = 5);
      ofset ? (queryOptions.ofset = ofset) : (queryOptions.ofset = 1);
      const { count, rows } = await Movie.findAndCountAll({
        where: { ...queryCondition },
        ...queryOptions,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      return {
        message: count,
        data: rows,
      };
    } catch (error) {
      return {
        message: error,
      };
    }
  },

  getAllMovie: async () => {
    try {
      const data = await Movie.findAll();
      return {
        mressage: "sucessfull",
        data: data,
      };
    } catch (error) {
      console.log(error);
      return {
        mess: error,
      };
    }
  },
  getMovieById: async (id: number) => {
    try {
      const data = await Movie.findOne({
        where: { id: id },
        include: [{ model: db.Seri, as: "seriData", attributes: ["title"] }],
      });
      return {
        success: true,
        data: data,
      };
    } catch (error) {
      console.log(error);
      throw new Error("get movie by id falure");
    }
  },
  addMovie: async ({ fileName, ...data }: typeOfMovie, files: any) => {
    try {
      let createMovie;
      const movie = await Movie.findOne({ where: { name: data.name } });
      if (!movie) {
        createMovie = await Movie.create({ ...data });
        if (!createMovie) throw new Error("something went wrong");
      }
      return {
        status: createMovie ? "success" : "falure",
        data: createMovie,
      };
    } catch (error) {
      console.log(error);
    }
  },

  updateFilm: async ({ fileName, ...data }: typeOfMovie, id: string) => {
    console.log("check id film", id);
    try {
      const existedMovie = await Movie.findOne({ where: { id: id } });
      if (!existedMovie) throw Error("find movie falure");
      console.log("existed movie", existedMovie.id);
      await Movie.update({ ...data }, { where: { id: id } });
      return {
        status: "ok",
      };
    } catch (error) {
      return { message: error };
    }
  },
  deleteMovie: async (id: number) => {
    try {
      const movie = await Movie.findOne({ where: { id: id } });
      if (movie) {
        await Movie.destroy({ where: { id: id } });
        const [fileVideo, fileImage] = await Promise.all([
          FileImage.findAll({ where: { movie_Id: id }, attributes: ["image"] }),
          FileVideo.findAll({ where: { movie_Id: id }, attributes: ["video"] }),
        ]);
        await Promise.all([
          FileImage.destroy({ where: { movie_Id: id } }),
          FileVideo.destroy({ where: { movie_Id: id } }),
        ]);
        const fileAll = [...fileVideo, ...fileImage];
        Promise.all(
          fileAll.map((item) => {
            if (Object.values(item.dataValues)[0]) {
              handleDeleteFile(
                Object.values(item.dataValues)[0],
                Object.keys(item.dataValues)[0]
              );
            }
          })
        );
        return {
          success: true,
          message: "a movie was deleted",
          data: fileAll,
        };
      }
      return {
        success: false,
        message: "the movie is not in the database",
      };
    } catch (error) {
      return {
        success: false,
        message: error,
      };
    }
  },
};
