const express = require("express");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");
const upload = require("../middlewares/upload");
const { uploadImage } = require("../controllers/uploadController");

router.post("/image", protect, upload.single("image"), uploadImage);

module.exports = router;
