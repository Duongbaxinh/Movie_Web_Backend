"use strict";
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Movie extends sequelize_1.Model {
        static associate(models) {
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
    Movie.init({
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
    }, {
        sequelize,
        modelName: "Movie",
    });
    return Movie;
};
