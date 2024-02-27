import { Model, Sequelize } from "sequelize";
export = (sequelize: any, DataType: any) => {
    interface typeOfSeri {
        seri_id: string,
        image: string,
        typeOf: string,
    }
    class SeriFile extends Model<typeOfSeri> implements typeOfSeri {
        seri_id!: string
        image!: string
        typeOf!: string
        static associate(model: any) {
            SeriFile.belongsTo(model.Movie, {
                foreignKey: 'seri_id'
            })
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
    },
        {
            sequelize,
            modelName: "SeriFile"
        }
    )
    return SeriFile
}

