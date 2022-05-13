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
        address: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: [7, 100],
                    msg: 'O campo name precisa ter pelo menos 7 caracteres'
                }
            }

        },
        cpf: {
            type: DataTypes.STRING,
            validate: {
                is: {
                    args: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
                    msg: 'O campo cpf precisa ser válido'
                }
            }
        },
        birthdate: {
            type: DataTypes.DATEONLY,
            validate: {
                isBefore: {
                    args: "2004-11-05",
                    msg: 'A pessoa precisa ser maior de 18 anos!'
                }
            }

        }
    }, {
        sequelize,
        modelName: 'wallet',
    });
    return wallet;
};