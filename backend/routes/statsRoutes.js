// backend/routes/statsRoutes.js
const express = require('express');
const router = express.Router();
const statsController = require('../controllers/statsController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);
router.get('/', statsController.getStats);

module.exports = router;