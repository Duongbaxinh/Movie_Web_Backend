"use strict";

import { Sequelize, DataTypes } from "sequelize";
const fs = require("fs");
const path = require("path");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "production";
const config = require(__dirname + "/../config/config.ts")[env];
const db: any = {};

let sequelize: Sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file: string) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".ts" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file: string) => {
    const model: any = require(path.join(__dirname, file))(
      sequelize,
      DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export = db;
