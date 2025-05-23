// backend/controllers/authController.js
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const config = require('../config');

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const accessToken = jwt.sign({ id: user.id }, config.JWT_SECRET, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ id: user.id }, config.JWT_REFRESH_SECRET, { expiresIn: '7d' });

    res.json({ accessToken, refreshToken });
  } catch (err) {
    next(err);
  }
};

exports.logout = (req, res) => {
  res.status(200).json({ message: 'Logged out' });
};