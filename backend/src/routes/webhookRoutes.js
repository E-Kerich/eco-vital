const express = require("express");
const router = express.Router();
const {
  handlePaystackWebhook
} = require("../controllers/webhookController");

router.post("/webhook", handlePaystackWebhook);

module.exports = router;
