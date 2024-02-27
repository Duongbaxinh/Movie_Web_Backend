"use strict";
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Comment extends sequelize_1.Model {
        static associate(models) {
            Comment.belongsTo(models.User, {
                foreignKey: "userId",
            });
            Comment.belongsTo(models.Movie, {
                foreignKey: "MovieId",
            });
        }
    }
    Comment.init({
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
    }, { sequelize, modelName: "Comment" });
    return Comment;
};
