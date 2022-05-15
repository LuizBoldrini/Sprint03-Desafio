'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Coins extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Coins.hasMany(models.Transactions, { foreignKey: 'idCoin' })
        }
    }
    Coins.init({
        coin: DataTypes.STRING,
        fullname: DataTypes.STRING,
        amont: DataTypes.FLOAT
    }, {
        sequelize,
        modelName: 'Coins',
    });
    return Coins;
};