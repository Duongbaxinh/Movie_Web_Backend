import FileImage from "../migrations/FileImage";
import db from "../models";

interface typeOfSeri {
  id?: string;
  title: string;
  genre: string;
  rating: number;
  yearStated: number;
  yearEnded: number;
  description: string;
  numberOfseson: number;
  avatar: string;
  fileName: any;
}
export const seri = {
  getSeri: async () => {
    try {
      const data = await db.Seri.findAll({
        include: [{ model: db.Movie as "seriData" }],
      });
      console.log("check data seris", data);
      return {
        success: data ? true : false,
        data: data ? data : null,
      };
    } catch (error) {
      return {
        success: false,
        message: error,
      };
    }
  },
  getSeriById: async (id: string) => {
    try {
      const data = await db.Seri.findOne({
        where: { id: id },
        include: [
          {
            model: db.Movie,
          },
        ],
      });
      return {
        success: data ? true : false,
        data: data ? data : null,
      };
    } catch (error) {
      return {
        success: false,
        error: error,
      };
    }
  },
  addSeri: async ({ fileName, ...data }: typeOfSeri) => {
    console.log("check file Name", data);
    try {
      const newSeri = await db.Seri.create({ ...data });
      if (!newSeri) throw Error("something went wrong");
      return "ok";
    } catch (error) {
      console.log(error);
    }
  },
  updateSeri: async ({ id, ...data }: typeOfSeri) => {
    try {
      console.log("id", id);
      await db.Seri.update({ ...data }, { where: { id: id } });
      return {
        message: "updated successfull",
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  deleteSeri: async (id: number) => {
    try {
      await db.Seri.destroy({ where: { id: id } });
      return {
        message: "seri was deleted",
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
