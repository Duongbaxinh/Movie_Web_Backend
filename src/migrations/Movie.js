'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Movies', {
            id: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER
            },
            name: { type: Sequelize.STRING },
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
        },)
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Movies')
    }
}