'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class wallet extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    wallet.init({
        name: {
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: [7, 200],
                    msg: 'O campo name precisa ter 7 ou mais caratcteres'
                }
            }
        },
        cpf: {
            type: DataTypes.STRING,
            validate: {
                is: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
                msg: 'O campo cpf precisa ser válido'
            }
        },
        birthdate: {
            type: DataTypes.DATEONLY,
            validate: {
                isBefore: "2004-01-01"
            }
        }
    }, {
        sequelize,
        modelName: 'wallet',
    });
    return wallet;
};