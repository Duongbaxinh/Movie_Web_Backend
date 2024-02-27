'use strict'
import { Sequelize, DataType, Model } from "sequelize"

export = (sequelize: any, DataType: any) => {
    interface dataTypeOfFileName {
        movie_Id: string,
        image: string,
        typeOf: string,
    }
    class FileImage extends Model<dataTypeOfFileName> implements dataTypeOfFileName {
        movie_Id!: string
        image!: string
        typeOf!: string
        static associate(models: any) {
            FileImage.belongsTo(models.Movie, {
                foreignKey: 'movie_Id'
            })
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
    })
    return FileImage
}
