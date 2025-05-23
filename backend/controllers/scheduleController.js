// backend/controllers/scheduleController.js
const { Schedule } = require('../models');

exports.getAllSchedules = async (req, res, next) => {
  try {
    const schedules = await Schedule.findAll();
    res.json(schedules);
  } catch (err) {
    next(err);
  }
};

exports.createSchedule = async (req, res, next) => {
  try {
    const schedule = await Schedule.create(req.body);
    res.status(201).json(schedule);
  } catch (err) {
    next(err);
  }
};