const Blog = require("../models/Blog");
const cloudinary = require("../config/cloudinary");

// @desc Create blog
// @route POST /api/blogs
// @access Private
exports.createBlog = async (req, res) => {
  try {
    const { title, excerpt, content, status } = req.body;

    let imageUrl = "";
    if (req.file) {
      const result = await cloudinary.uploader.upload_stream(
        { folder: "eco-vital/blogs" },
        async (error, result) => {
          if (error) throw error;

          const blog = await Blog.create({
            title,
            excerpt,
            content,
            status,
            featuredImage: result.secure_url,
            author: req.user._id
          });

          res.status(201).json(blog);
        }
      );

      result.end(req.file.buffer);
    } else {
      const blog = await Blog.create({
        title,
        excerpt,
        content,
        status,
        author: req.user._id
      });

      res.status(201).json(blog);
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to create blog" });
  }
};

// @desc Get all published blogs (public)
// @route GET /api/blogs
exports.getBlogs = async (req, res) => {
  const blogs = await Blog.find({ status: "published" }).sort({
    createdAt: -1
  });

  res.json(blogs);
};

// @desc Get single blog by slug
// @route GET /api/blogs/:slug
exports.getBlogBySlug = async (req, res) => {
  const blog = await Blog.findOne({ slug: req.params.slug });

  if (!blog)
    return res.status(404).json({ message: "Blog not found" });

  res.json(blog);
};

// @desc Get all blogs (admin)
// @route GET /api/blogs/admin
exports.getAllBlogsAdmin = async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
};

// @desc Delete blog
// @route DELETE /api/blogs/:id
exports.deleteBlog = async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: "Blog deleted" });
};


// @desc Update blog
// @route PUT /api/blogs/:id
// @access Private (Admin)
exports.updateBlog = async (req, res) => {
    try {
      const { title, excerpt, content, status } = req.body;
  
      const blog = await Blog.findById(req.params.id);
      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }
  
      // Update fields
      blog.title = title || blog.title;
      blog.excerpt = excerpt || blog.excerpt;
      blog.content = content || blog.content;
      blog.status = status || blog.status;
  
      // Handle image replacement
      if (req.file) {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: "eco-vital/blogs" },
          async (error, result) => {
            if (error) {
              return res.status(500).json({ message: "Image upload failed" });
            }
  
            blog.featuredImage = result.secure_url;
            const updatedBlog = await blog.save();
            res.json(updatedBlog);
          }
        );
  
        uploadStream.end(req.file.buffer);
      } else {
        const updatedBlog = await blog.save();
        res.json(updatedBlog);
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to update blog" });
    }
  };
  