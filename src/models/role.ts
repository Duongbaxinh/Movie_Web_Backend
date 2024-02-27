'use strict'

import { Sequelize } from "sequelize"

import {Model} from "sequelize"
interface RoleAttribute{
    code:string,
    name:string
}
export = (sequelize:Sequelize,DataTypes:any)=>{
    class Role extends Model<RoleAttribute> implements RoleAttribute{
        code!:string
        name!:string
    }
    Role.init({ 
        code:{
            type:DataTypes.STRING
        },
        name:{
            type:DataTypes.STRING
        }
    },
    {sequelize,
    modelName:'Role',
})
    return Role
 }