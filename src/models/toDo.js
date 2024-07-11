const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ToDo = sequelize.define('Todo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'todos',
  updatedAt: false
});

module.exports = ToDo;
