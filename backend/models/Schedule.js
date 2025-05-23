// backend/models/Schedule.js
const { DataTypes } = require('sequelize');
const sequelize = require('../models');

const Schedule = (DataTypes, sequelize) => { sequelize.define('Schedule', {
  clientId: { type: DataTypes.INTEGER, allowNull: false },
  category: { type: DataTypes.STRING },
  filePath: { type: DataTypes.STRING, allowNull: false },
  startTime: { type: DataTypes.DATE, allowNull: false },
  endTime: { type: DataTypes.DATE, allowNull: false },
  position: { type: DataTypes.STRING }
}); }

module.exports = Schedule;