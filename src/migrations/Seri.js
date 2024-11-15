"use strict";
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Series", {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
      },
      genre: {
        type: Sequelize.STRING,
      },
      rating: {
        type: Sequelize.FLOAT,
      },
      yearStated: {
        type: Sequelize.INTEGER,
      },
      yearEnded: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING(2000),
      },
      release: { type: Sequelize.STRING },
      author: { type: Sequelize.STRING },
      actor: { type: Sequelize.STRING },
      dubbing: {
        type: Sequelize.STRING,
      },
      numberOfseson: {
        type: Sequelize.INTEGER,
      },
      banner: {
        type: Sequelize.STRING,
      },
      thumbnail: {
        type: Sequelize.STRING,
      },
      avatar: {
        type: Sequelize.STRING,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Series");
  },
};
