'use strict';
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataType) => {
    class FileVideo extends sequelize_1.Model {
        static associate(models) {
            FileVideo.belongsTo(models.Movie, {
                foreignKey: 'movie_Id'
            });
        }
    }
    FileVideo.init({
        movie_Id: {
            type: DataType.STRING
        },
        video: {
            type: DataType.STRING
        },
        typeOf: {
            type: DataType.STRING
        }
    }, {
        sequelize,
        modelName: 'FileVideo'
    });
    return FileVideo;
};
