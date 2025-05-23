// backend/controllers/clientController.js
const { Client } = require('../models');

exports.registerClient = async (req, res, next) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json(client);
  } catch (err) {
    next(err);
  }
};

exports.getAllClients = async (req, res, next) => {
  try {
    const clients = await Client.findAll();
    res.json(clients);
  } catch (err) {
    next(err);
  }
};