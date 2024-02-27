'use strict';

import { Sequelize } from "sequelize";

import {
  Model
} from 'sequelize';
interface UserAttribute {
  name: string,
  gender: string,
  birthday: string,
  email: string,
  password: string,
  role_user: string,
  address: string,
  avatar: string,
  refreshToken: string,
}
export = (sequelize: Sequelize, DataTypes: any) => {
  class User extends Model<UserAttribute> implements UserAttribute {
    name!: string
    gender!: string
    birthday!: string
    email!: string
    password!: string
    role_user!: string
    address!: string
    avatar!: string
    refreshToken!: string
    static associate(models: any) {
      User.belongsTo(models.Role, {
        foreignKey: "role_user",
        targetKey: "code",
        as: "roleData",
      })
      // User.hasMany(models.Comment, {
      //   foreignKey: 'userId'
      // })
      User.belongsToMany(models.Movie, {
        through: models.Comment
      })
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING
    },
    gender: { type: DataTypes.STRING },
    birthday: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.INTEGER },
    role_user: { type: DataTypes.INTEGER },
    address: { type: DataTypes.STRING },
    avatar: { type: DataTypes.STRING },
    refreshToken: { type: DataTypes.STRING },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};