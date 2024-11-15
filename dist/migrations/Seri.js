"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.createTable("Series", {
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
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.dropTable("Series");
        });
    },
};
