const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const Order = sequelize.define('order', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quantity: DataTypes.INTEGER,
});

module.exports = Order;
