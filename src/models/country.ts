'use strict'

import { Model, Sequelize } from "sequelize"

interface CountryAttribute {
    name: string
}
export = (sequelize: Sequelize, DataTypes: any) => {
    class Country extends Model<CountryAttribute> implements CountryAttribute {
        name!: string
        static associate(models: any) {
            Country.belongsToMany(models.Movie, {
                through: models.MovieCountry
            })
        }
    }
    Country.init({
        name: {
            type: DataTypes.STRING
        },

    }, {
        sequelize,
        modelName: "Country"
    })
    return Country
}