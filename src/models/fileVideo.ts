'use strict'
import { Sequelize, DataType, Model } from "sequelize"

export = (sequelize: any, DataType: any) => {
    interface dataTypeOfFileName {
        movie_Id: string,
        video: string,
        typeOf: string
    }
    class FileVideo extends Model<dataTypeOfFileName> implements dataTypeOfFileName {
        movie_Id!: string
        video!: string
        typeOf!: string
        static associate(models: any) {
            FileVideo.belongsTo(models.Movie, {
                foreignKey: 'movie_Id'
            })
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
    })
    return FileVideo
}
