"use strict";
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataType) => {
    class SeriFile extends sequelize_1.Model {
        static associate(model) {
            SeriFile.belongsTo(model.Movie, {
                foreignKey: 'seri_id'
            });
        }
    }
    SeriFile.init({
        seri_id: {
            type: DataType.STRING,
        },
        image: {
            type: DataType.STRING
        },
        typeOf: {
            type: DataType.STRING
        }
    }, {
        sequelize,
        modelName: "SeriFile"
    });
    return SeriFile;
};
