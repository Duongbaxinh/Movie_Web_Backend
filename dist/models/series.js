"use strict";
"use stric";
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Series extends sequelize_1.Model {
        static associate(models) {
            Series.hasMany(models.Movie, {
                foreignKey: "seri_id",
            });
        }
    }
    Series.init({
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
    }, {
        sequelize,
        modelName: "Series",
        tableName: "Series",
    });
    return Series;
};
