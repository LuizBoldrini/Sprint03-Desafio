'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Transactions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            value: {
                type: Sequelize.DOUBLE
            },
            datetime: {
                allowNull: false,
                type: Sequelize.DATE
            },
            sendTo: {
                type: Sequelize.INTEGER
            },
            receiveFrom: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: 'Wallets', key: 'address' }
            },
            currentCotation: {
                type: Sequelize.DOUBLE
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Transactions');
    }
};