'use strict';
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
            yield queryInterface.createTable('Movies', {
                id: {
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                    type: Sequelize.INTEGER
                },
                mainName: {
                    type: Sequelize.STRING
                },
                name: {
                    type: Sequelize.STRING
                },
                genre: { type: Sequelize.STRING },
                chapter: { type: Sequelize.STRING },
                dubbing: { type: Sequelize.STRING },
                price: { type: Sequelize.FLOAT },
                release: { type: Sequelize.FLOAT },
                rating: { type: Sequelize.INTEGER },
                description: { type: Sequelize.STRING },
                seri_id: { type: Sequelize.STRING },
                author: { type: Sequelize.STRING },
                actor: { type: Sequelize.STRING },
                time: { type: Sequelize.INTEGER },
                avatar: { type: Sequelize.STRING },
                video: { type: Sequelize.STRING },
                trailler: { type: Sequelize.STRING },
                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                },
                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                }
            });
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.dropTable('Movies');
        });
    }
};
