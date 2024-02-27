'use strict';
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class MovieCountry extends sequelize_1.Model {
    }
    MovieCountry.init({
        movieId: {
            type: DataTypes.STRING
        },
        countryId: { type: DataTypes.STRING },
    }, {
        sequelize,
        modelName: "MovieCountry"
    });
    return MovieCountry;
};
