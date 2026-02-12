const express = require("express");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");
const {
  createLead,
  getLeads,
  updateLeadStatus,
  deleteLead
} = require("../controllers/leadController");

// Public
router.post("/", createLead);

// Admin
router.get("/", protect, getLeads);
router.put("/:id", protect, updateLeadStatus);
router.delete("/:id", protect, deleteLead);

module.exports = router;
