'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('Wallets', [{
                name: 'Luiz Emanuel',
                cpf: '111.222.333.44',
                birthdate: '2000-09-14',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Emanuel Boldrini',
                cpf: '123.123.123.12',
                birthdate: '2000-10-01',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Wallets', null, {});
    }
};