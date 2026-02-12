import { useEffect, useState } from "react";
import api from "../../../api/axios";
import DashboardLayout from "../../../components/admin/DashboardLayout";
import BlogForm from "../../../pages/admin/blogs/CreateBlog";
import { Edit2, Trash2, Eye, FileText, Calendar, CheckCircle, Clock, XCircle } from "lucide-react";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingBlog, setEditingBlog] = useState(null);

  const fetchBlogs = () => {
    setLoading(true);
    api.get("/blogs/admin/all").then(res => {
      setBlogs(res.data);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  };

    const toggleStatus = async (blog) => {
        const newStatus = blog.status === "published" ? "draft" : "published";
    
        await api.put(`/blogs/${blog._id}`, {
        title: blog.title,
        excerpt: blog.excerpt,
        content: blog.content,
        status: newStatus
        });
    
        fetchBlogs();
    };
  

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    await api.delete(`/blogs/${id}`);
    fetchBlogs();
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'published': return 'bg-emerald-900/20 text-emerald-400';
      case 'draft': return 'bg-amber-900/20 text-amber-400';
      case 'archived': return 'bg-gray-800 text-gray-400';
      default: return 'bg-gray-800 text-gray-400';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'published': return <CheckCircle className="w-4 h-4" />;
      case 'draft': return <Clock className="w-4 h-4" />;
      case 'archived': return <XCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="min-h-screen flex items-center justify-center bg-black">
          <div className="text-center">
            <div className="w-12 h-12 border-2 border-emerald-900 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white">Loading blogs...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-700 mb-2">Blogs</h2>
        <p className="text-gray-400">Create, edit, and manage your blog content</p>
      </div>

      {/* BLOG FORM */}
      <div className="mb-10">
        <BlogForm
          editingBlog={editingBlog}
          onSuccess={() => {
            setEditingBlog(null);
            fetchBlogs();
          }}
        />
      </div>

      {/* BLOGS TABLE */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        <div className="border-b border-gray-800 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">All Blogs</h3>
              <p className="text-sm text-gray-400 mt-1">Manage your published content</p>
            </div>
            <div className="flex items-center gap-2 text-emerald-400">
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">{blogs.length} blogs</span>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="py-4 px-6 text-left">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Title
                  </div>
                </th>
                <th className="py-4 px-6 text-left">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Status
                  </div>
                </th>
                <th className="py-4 px-6 text-left">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    <Calendar className="w-4 h-4" />
                    Date
                  </div>
                </th>
                <th className="py-4 px-6 text-left">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Actions
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {blogs.map(blog => (
                <tr 
                  key={blog._id} 
                  className="border-b border-gray-800 last:border-none hover:bg-gray-800/50 transition-colors"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-emerald-900 to-green-900 rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-white" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-white truncate">{blog.title}</p>
                        {blog.slug && (
                          <p className="text-xs text-gray-500 truncate">{blog.slug}</p>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="py-2">
                        <button
                            onClick={() => toggleStatus(blog)}
                            className={`px-3 py-1 rounded text-xs font-medium ${
                            blog.status === "published"
                                ? "bg-green-100 text-green-700"
                                : "bg-gray-200 text-gray-600"
                            }`}
                        >
                            {blog.status}
                        </button>
                        </td>

                  <td className="py-4 px-6">
                    <div className="flex flex-col">
                      <span className="text-white">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(blog.createdAt).toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setEditingBlog(blog)}
                        className="p-2 bg-emerald-900/20 text-emerald-400 rounded-lg hover:bg-emerald-900/30 transition-colors"
                        title="Edit"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => window.open(`/blogs/preview/${blog.slug}`, '_blank')}
                        className="p-2 bg-gray-800 text-gray-400 rounded-lg hover:bg-gray-700 hover:text-white transition-colors"
                        title="View"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(blog._id)}
                        className="p-2 bg-red-900/20 text-red-400 rounded-lg hover:bg-red-900/30 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {!blogs.length && (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-emerald-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-emerald-500" />
              </div>
              <p className="text-gray-400">No blogs created yet</p>
              <p className="text-sm text-gray-500 mt-2">Create your first blog using the form above</p>
            </div>
          )}
        </div>

        {blogs.length > 0 && (
          <div className="border-t border-gray-800 p-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
              <span className="text-gray-500">
                Showing {blogs.length} blogs
              </span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setEditingBlog(null)}
                  className="px-4 py-2 bg-gradient-to-r from-emerald-900 to-green-900 text-white rounded-lg hover:opacity-90 transition-all"
                >
                  Create New Blog
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}