'use strict'
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('serifiles', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            seri_id: {
                type: Sequelize.STRING,
                allowNull: false
            },
            image: {
                type: Sequelize.STRING,
            },
            typeOf: {
                type: Sequelize.STRING,
            },
            createAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updateAt: {
                type: Sequelize.DATE,
                allowNull: false
            }
        })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('serifiles')
    }
}