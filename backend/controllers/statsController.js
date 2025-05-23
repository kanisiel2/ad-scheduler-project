// backend/controllers/statsController.js
exports.getStats = async (req, res) => {
    res.json({ views: 1234, clicks: 567 });
  };