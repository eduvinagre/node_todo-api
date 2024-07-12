const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ToDo = sequelize.define(
  'Todo',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: 'todos',
  }
);

module.exports = ToDo;

