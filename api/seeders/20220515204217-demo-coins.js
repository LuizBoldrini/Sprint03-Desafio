'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Coins', [{
                coin: 'BTC',
                fullname: 'bitcoin',
                amont: 0.0000064,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                coin: 'UTC',
                fullname: 'dólar',
                amont: 0.20,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Coins', null, {});

    }
};