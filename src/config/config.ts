import dotenv from "dotenv";
dotenv.config();

module.exports = {
  development: {
    username: "root",
    password: "123456",
    database: "db_movie",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false,
  },
  production: {
    username: process.env.DB_PROD_USER || "avnadmind",
    password: process.env.DB_PROD_PASS,
    database: process.env.DB_PROD_NAME || "defaultdb",
    host: process.env.DB_PROD_HOST,
    port: process.env.DB_PROD_PORT || 13252,
    dialect: "mysql",
    logging: console.log,
  },
};
