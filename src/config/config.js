require("dotenv").config();
module.exports = {
  development: {
    username: "root",
    password: "123456",
    database: "db_movie",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "avnadmind" || process.env.DB_PROD_USER,
    password: process.env.DB_PROD_PASS,
    database: "defaultdb" || process.env.DB_PROD_NAME,
    host: process.env.DB_PROD_HOST,
    port: 13252 || process.env.DB_PROD_PORT,
    dialect: "mysql",
    logging: console.log,
  },
};
