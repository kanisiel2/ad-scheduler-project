// backend/models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../models');

    const User = (DataTypes, sequelize) => { sequelize.define('User', {
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false }
    }); }

module.exports = User;