const express = require("express");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");
const {
  getOverview,
  getLeadStats,
  getBookingStats
} = require("../controllers/analyticController");

router.get("/overview", protect, getOverview);
router.get("/leads", protect, getLeadStats);
router.get("/bookings", protect, getBookingStats);

module.exports = router;
