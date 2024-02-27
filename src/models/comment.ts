import { Model } from "sequelize";

export = (sequelize: any, DataTypes: any) => {
  interface typeOfComment {
    MovieId: number;
    userId: number;
    SeriId: string;
    content: string;
    image: string;
    video: string;
  }
  class Comment extends Model<typeOfComment> implements typeOfComment {
    MovieId!: number;
    userId!: number;
    SeriId!: string;
    content!: string;
    image!: string;
    video!: string;
    static associate(models: any) {
      Comment.belongsTo(models.User, {
        foreignKey: "userId",
      });
      Comment.belongsTo(models.Movie, {
        foreignKey: "MovieId",
      });
    }
  }
  Comment.init(
    {
      MovieId: {
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      SeriId: {
        type: DataTypes.INTEGER,
      },
      content: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
      video: {
        type: DataTypes.STRING,
      },
    },
    { sequelize, modelName: "Comment" }
  );
  return Comment;
};
