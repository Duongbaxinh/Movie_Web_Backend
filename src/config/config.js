module.exports = {
  development: {
    username: "root",
    password: "123456",
    database: "web_movie",
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
    username: "avnadmin",
    password: "AVNS_y8dypGmOfFI08Cq99zP",
    database: "movies",
    host: "mysql-182751c1-duongbaxinh2021-7e43.d.aivencloud.com",
    port: 25482,
    dialect: "mysql",
  },
};
