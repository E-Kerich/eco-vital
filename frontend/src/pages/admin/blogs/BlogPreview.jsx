import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../../api/axios";
import DashboardLayout from "../../../components/admin/DashboardLayout";
import { ArrowLeft, Calendar, Eye, User, Tag, Globe, Clock, Edit2 } from "lucide-react";

export default function BlogPreview() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.get(`/blogs/admin/all`).then(res => {
      const found = res.data.find(b => b._id === id);
      setBlog(found);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="min-h-screen flex items-center justify-center bg-black">
          <div className="text-center">
            <div className="w-12 h-12 border-2 border-emerald-900 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white">Loading preview...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  if (!blog) {
    return (
      <DashboardLayout>
        <div className="min-h-screen flex items-center justify-center bg-black">
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Tag className="w-8 h-8 text-emerald-500" />
            </div>
            <p className="text-white">Blog not found</p>
            <button
              onClick={() => navigate('/admin/blogs')}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-emerald-900 to-green-900 text-white rounded-lg hover:opacity-90 transition-all"
            >
              Back to Blogs
            </button>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate('/admin/blogs')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blogs
          </button>
          
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              blog.status === 'published' 
                ? 'bg-emerald-900/20 text-emerald-400' 
                : 'bg-amber-900/20 text-amber-400'
            }`}>
              {blog.status === 'published' ? 'Published' : 'Draft'}
            </span>
            <button
              onClick={() => navigate(`/admin/blogs/edit/${blog._id}`)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-400 rounded-lg hover:bg-gray-700 hover:text-white transition-colors"
            >
              <Edit2 className="w-4 h-4" />
              Edit
            </button>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-white mb-4">Blog Preview</h1>
        <p className="text-gray-400">Previewing blog content as it will appear to readers</p>
      </div>

      {/* Blog Preview Container */}
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
        {/* Featured Image */}
        {blog.featuredImage || blog.imageUrl ? (
          <div className="w-full h-64 md:h-80 bg-gradient-to-r from-emerald-900 to-green-900 overflow-hidden">
            <img
              src={blog.featuredImage || blog.imageUrl}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-full h-64 md:h-80 bg-gradient-to-r from-emerald-900 to-green-900 flex items-center justify-center">
            <Tag className="w-16 h-16 text-white/30" />
          </div>
        )}

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(blog.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{new Date(blog.createdAt).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
              })}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Eco-Vital Admin</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>Public Preview</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {blog.title}
          </h1>

          {/* Excerpt */}
          {blog.excerpt && (
            <div className="mb-8">
              <p className="text-lg text-gray-600 italic border-l-4 border-emerald-500 pl-4 py-2">
                {blog.excerpt}
              </p>
            </div>
          )}

          {/* Content */}
          <article
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 text-sm font-medium rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Preview Notice */}
          <div className="mt-8 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg border border-emerald-100">
            <div className="flex items-start gap-3">
              <Eye className="w-5 h-5 text-emerald-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-emerald-800">Preview Mode</p>
                <p className="text-xs text-emerald-600 mt-1">
                  This is how your blog will appear to readers. Changes made here are not saved until you update the blog.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-gray-900 border border-gray-800 rounded-lg">
          <div className="text-sm text-gray-400">
            <span className="font-medium">Status:</span> {blog.status}
            {" • "}
            <span className="font-medium">Last Updated:</span> {new Date(blog.updatedAt || blog.createdAt).toLocaleDateString()}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/admin/blogs')}
              className="px-6 py-2 border border-gray-800 text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
            >
              Back to List
            </button>
            <button
              onClick={() => navigate(`/admin/blogs/edit/${blog._id}`)}
              className="px-6 py-2 bg-gradient-to-r from-emerald-900 to-green-900 text-white rounded-lg hover:opacity-90 transition-all"
            >
              Edit Blog
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}