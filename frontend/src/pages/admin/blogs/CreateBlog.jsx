import { useEffect, useState } from "react";
import api from "../../../api/axios";
import RichTextEditor from "../../../components/admin/RichText";

import { Upload, X, Type, FileText, Edit2, Globe, Image as ImageIcon } from "lucide-react";

export default function BlogForm({ editingBlog, onSuccess }) {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("draft");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editingBlog) {
      setTitle(editingBlog.title);
      setExcerpt(editingBlog.excerpt);
      setContent(editingBlog.content);
      setStatus(editingBlog.status);
      if (editingBlog.imageUrl) {
        setImagePreview(editingBlog.imageUrl);
      }
    }
  }, [editingBlog]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const removeImage = () => {
    setImage(null);
    setImagePreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("excerpt", excerpt);
      formData.append("content", content);
      formData.append("status", status);
      if (image) formData.append("image", image);

      if (editingBlog) {
        await api.put(`/blogs/${editingBlog._id}`, formData);
      } else {
        await api.post("/blogs", formData);
      }

      // Reset
      setTitle("");
      setExcerpt("");
      setContent("");
      setStatus("draft");
      setImage(null);
      setImagePreview(null);

      onSuccess();
    } catch (error) {
      console.error("Error saving blog:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white">
            {editingBlog ? "Edit Blog" : "Create New Blog"}
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            {editingBlog ? "Update your blog content" : "Write and publish new content"}
          </p>
        </div>
        {editingBlog && (
          <button
            onClick={() => {
              setTitle("");
              setExcerpt("");
              setContent("");
              setStatus("draft");
              setImage(null);
              setImagePreview(null);
              onSuccess();
            }}
            className="px-4 py-2 border border-gray-800 text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
          >
            Cancel Edit
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            <div className="flex items-center gap-2">
              <Type className="w-4 h-4" />
              Blog Title
            </div>
          </label>
          <input
            className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent transition-all"
            placeholder="Enter blog title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Excerpt */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Excerpt (Short Summary)
            </div>
          </label>
          <textarea
            className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent transition-all h-32 resize-none"
            placeholder="Write a brief summary of your blog"
            value={excerpt}
            onChange={e => setExcerpt(e.target.value)}
            required
          />
          <p className="text-xs text-gray-500 mt-2">Max 160 characters recommended</p>
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            <div className="flex items-center gap-2">
              <Edit2 className="w-4 h-4" />
              Blog Content
            </div>
          </label>
                <RichTextEditor
                    value={content}
                    onChange={setContent}
                />

        </div>

        {/* Status & Image Upload */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Status
              </div>
            </label>
            <select
              className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent transition-all"
              value={status}
              onChange={e => setStatus(e.target.value)}
            >
              <option value="draft" className="bg-gray-800">Draft</option>
              <option value="published" className="bg-gray-800">Published</option>
            </select>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4" />
                Featured Image
              </div>
            </label>
            <div className="space-y-4">
              {imagePreview ? (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-48 object-cover rounded-lg border border-gray-700"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-2 right-2 p-1.5 bg-red-900/80 text-white rounded-full hover:bg-red-900 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-700 rounded-lg cursor-pointer hover:bg-gray-800/50 transition-colors">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-3 text-gray-500" />
                    <p className="mb-2 text-sm text-gray-400">
                      <span className="font-medium">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleImageChange}
                    accept="image/*"
                  />
                </label>
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4 border-t border-gray-800">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-emerald-900 to-green-900 text-white font-semibold py-3 px-4 rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                {editingBlog ? "Updating..." : "Creating..."}
              </>
            ) : (
              <>
                {editingBlog ? (
                  <>
                    <Edit2 className="w-5 h-5" />
                    Update Blog
                  </>
                ) : (
                  <>
                    <FileText className="w-5 h-5" />
                    Create Blog
                  </>
                )}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}