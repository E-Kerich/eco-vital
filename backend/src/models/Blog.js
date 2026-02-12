const mongoose = require("mongoose");

const slugify = require('slugify');

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    slug: {
      type: String,
      unique: true
    },
    excerpt: {
      type: String,
      required: true,
      maxlength: 200
    },
    content: {
      type: String,
      required: true
    },
    featuredImage: {
      type: String
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft"
    },

    
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

// Auto-generate slug
blogSchema.pre('save', async function () {
  if (!this.slug) {
    this.slug = slugify(this.title, { lower: true });
  }
});


module.exports = mongoose.model("Blog", blogSchema);
