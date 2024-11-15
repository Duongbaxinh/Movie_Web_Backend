"use stric";
import { Sequelize, Model } from "sequelize";
interface typeData {
  title: string;
  genre: string;
  rating: number;
  yearStated: number;
  yearEnded: number;
  description: string;
  dubbing: string;
  numberOfseson: number;
  banner: string;
  thumbnail: string;
  avatar: string;
  release: string;
  author: string;
  actor: string;
}
export = (sequelize: Sequelize, DataTypes: any) => {
  class Series extends Model<typeData> implements typeData {
    title!: string;
    genre!: string;
    rating!: number;
    yearStated!: number;
    yearEnded!: number;
    description!: string;
    dubbing!: string;
    numberOfseson!: number;
    release!: string;
    author!: string;
    actor!: string;
    banner!: string;
    thumbnail!: string;
    avatar!: string;
    static associate(models: any) {
      Series.hasMany(models.Movie, {
        foreignKey: "seri_id",
      });
    }
  }
  Series.init(
    {
      title: {
        type: DataTypes.STRING,
      },
      genre: {
        type: DataTypes.STRING,
      },
      rating: {
        type: DataTypes.FLOAT,
      },
      yearStated: {
        type: DataTypes.INTEGER,
      },
      yearEnded: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.STRING,
      },
      dubbing: {
        type: DataTypes.STRING,
      },
      numberOfseson: {
        type: DataTypes.INTEGER,
      },
      release: { type: DataTypes.STRING },
      author: { type: DataTypes.STRING },
      actor: { type: DataTypes.STRING },
      banner: {
        type: DataTypes.STRING,
      },
      thumbnail: {
        type: DataTypes.STRING,
      },
      avatar: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Series",
      tableName: "Series",
    }
  );
  return Series;
};
