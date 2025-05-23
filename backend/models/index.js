// backend/models/index.js
const { Sequelize } = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASS, {
  host: config.DB_HOST,
  dialect: 'mariadb'
});

console.log(sequelize)

const User = require('./User');
const Schedule = require('./Schedule');
const Client = require('./Client');

module.exports = sequelize;
module.exports.User = User;
module.exports.Schedule = Schedule;
module.exports.Client = Client;