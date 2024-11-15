"use strict";
import { Model, Sequelize } from "sequelize";
export = (sequelize: Sequelize, DataTypes: any) => {
  interface MovieAttribute {
    name: string;
    genre: string;
    chapter: string;
    dubbing: string;
    price: number;
    rating: number;
    description: string;
    seri_id: string;
    time: number;
    release: number;
    author: string;
    actor: string;
    avatar: string;
    video: string;
    trailler: string;
  }
  class Movie extends Model<MovieAttribute> implements MovieAttribute {
    name!: string;
    genre!: string;
    chapter!: string;
    dubbing!: string;
    price!: number;
    release!: number;
    rating!: number;
    description!: string;
    seri_id!: string;
    time!: number;
    author!: string;
    actor!: string;
    avatar!: string;
    video!: string;
    trailler!: string;

    static associate(models: any) {
      Movie.belongsToMany(models.User, {
        through: models.Comment,
      });
      Movie.belongsTo(models.Series, {
        foreignKey: "seri_id",
        as: "seriData",
      });
      Movie.hasMany(models.FileVideo, {
        foreignKey: "movie_Id",
      });
      Movie.hasMany(models.FileImage, {
        foreignKey: "movie_Id",
      });
    }
  }
  Movie.init(
    {
      name: {
        type: DataTypes.STRING,
      },
      genre: { type: DataTypes.STRING },
      chapter: { type: DataTypes.STRING },
      dubbing: { type: DataTypes.STRING },
      price: { type: DataTypes.FLOAT },
      rating: { type: DataTypes.INTEGER },
      release: { type: DataTypes.FLOAT },
      description: { type: DataTypes.STRING },
      seri_id: { type: DataTypes.STRING },
      author: { type: DataTypes.STRING },
      actor: { type: DataTypes.STRING },
      time: { type: DataTypes.INTEGER },
      avatar: { type: DataTypes.STRING },
      video: { type: DataTypes.STRING },
      trailler: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  return Movie;
};
