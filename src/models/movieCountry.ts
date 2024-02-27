'use strict'
import { Model, Sequelize } from "sequelize"
export = (sequelize:Sequelize,DataTypes:any)=>{
    interface MovieAttribute{
        movieId:string,
        countryId:string,
    }
    class MovieCountry extends Model<MovieAttribute> implements MovieAttribute{
        movieId!:string
        countryId!:string
    }
    MovieCountry.init({
        movieId:{
            type:DataTypes.STRING
        },
        countryId:{type:DataTypes.STRING},
      },{
        sequelize,
        modelName:"MovieCountry"
      }
    )
    return MovieCountry
}