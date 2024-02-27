'use strict';
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataType) => {
    class FileImage extends sequelize_1.Model {
        static associate(models) {
            FileImage.belongsTo(models.Movie, {
                foreignKey: 'movie_Id'
            });
        }
    }
    FileImage.init({
        movie_Id: {
            type: DataType.STRING
        },
        image: {
            type: DataType.STRING
        },
        typeOf: {
            type: DataType.STRING
        }
    }, {
        sequelize,
        modelName: 'FileImage'
    });
    return FileImage;
};
