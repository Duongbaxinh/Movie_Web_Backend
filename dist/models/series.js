"use strict";
'use stric';
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Seri extends sequelize_1.Model {
        static associate(models) {
            Seri.hasMany(models.Movie, {
                foreignKey: "seri_id"
            });
        }
    }
    Seri.init({
        title: {
            type: DataTypes.STRING
        },
        genre: {
            type: DataTypes.STRING
        },
        rating: {
            type: DataTypes.FLOAT
        },
        yearStated: {
            type: DataTypes.INTEGER
        },
        yearEnded: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.STRING
        },
        numberOfseson: {
            type: DataTypes.INTEGER
        },
        banner: {
            type: DataTypes.STRING
        },
        thumbai: {
            type: DataTypes.STRING
        },
        main: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: "Seri"
    });
    return Seri;
};
