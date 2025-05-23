// backend/models/Client.js
const { DataTypes } = require('sequelize');
const sequelize = require('../models');

const Client = sequelize.define('Client', {
  name: { type: DataTypes.STRING, allowNull: false },
  category: { type: DataTypes.STRING },
  status: { type: DataTypes.STRING },
  lastActive: { type: DataTypes.DATE }
});

module.exports = Client;