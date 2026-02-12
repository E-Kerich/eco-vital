const express = require("express");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");
const upload = require("../middlewares/upload");
const {
  createBlog,
  getBlogs,
  getBlogBySlug,
  getAllBlogsAdmin,
  deleteBlog
} = require("../controllers/blogController");
const { updateBlog } = require("../controllers/blogController");


// Public
router.get("/", getBlogs);
router.get("/:slug", getBlogBySlug);

// Admin
router.get("/admin/all", protect, getAllBlogsAdmin);
router.post("/", protect, upload.single("image"), createBlog);
router.put("/:id", protect, upload.single("image"), updateBlog);
router.delete("/:id", protect, deleteBlog);

module.exports = router;
