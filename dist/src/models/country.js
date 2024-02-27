'use strict';
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Country extends sequelize_1.Model {
        static associate(models) {
            Country.belongsToMany(models.Movie, {
                through: models.MovieCountry
            });
        }
    }
    Country.init({
        name: {
            type: DataTypes.STRING
        },
    }, {
        sequelize,
        modelName: "Country"
    });
    return Country;
};
