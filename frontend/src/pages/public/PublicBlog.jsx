import { useEffect, useState } from "react";
import api from "../../api/axios";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock, Search, Filter } from "lucide-react";

export default function PublicBlogs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    setLoading(true);
    api.get("/blogs").then(res => {
      setBlogs(res.data);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, []);

  // Extract unique categories from blogs
  const categories = ["all", ...new Set(blogs.flatMap(blog => blog.categories || []).filter(Boolean))];

  // Filter blogs based on search and category
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || 
                           (blog.categories && blog.categories.includes(selectedCategory));
    
    return matchesSearch && matchesCategory;
  });

  const formatReadingTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readingTime} min read`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-700">Loading articles...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gray-600 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Insights & Articles</h1>
            <p className="text-lg text-emerald-100 mb-8 max-w-3xl mx-auto">
              Expert insights, sustainability tips, and industry updates from Eco-Vital Consulting
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
              />
            </div>
          </div>
      

      
          
        </div>
        
      </div>

      {/* Categories Filter */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filter by:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category === "all" ? "All Articles" : category}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map(blog => (
              <article 
                key={blog._id} 
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-emerald-300 transition-all duration-300 hover:shadow-lg group"
              >
                {/* Featured Image */}
                {blog.featuredImage || blog.imageUrl ? (
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={blog.featuredImage || blog.imageUrl}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="h-48 w-full bg-gradient-to-r from-emerald-50 to-green-50 flex items-center justify-center">
                    <div className="w-16 h-16 bg-emerald-600/10 rounded-full flex items-center justify-center">
                      <div className="text-emerald-600 text-4xl font-bold">EV</div>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(blog.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{formatReadingTime(blog.content || '')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>Eco-Vital</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    <Link to={`/blogs/${blog.slug}`} className="hover:no-underline">
                      {blog.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  {/* Tags */}
                  {blog.categories && blog.categories.length > 0 && (
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {blog.categories.slice(0, 3).map((category, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Read More */}
                  <Link
                    to={`/blogs/${blog.slug}`}
                    className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium text-sm group/link transition-colors"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-emerald-600" />
            </div>
            <p className="text-gray-900 text-lg mb-2">No articles found</p>
            <p className="text-gray-600">
              {searchTerm || selectedCategory !== "all" 
                ? "Try adjusting your search or filter criteria" 
                : "No articles published yet. Check back soon!"}
            </p>
            {(searchTerm || selectedCategory !== "all") && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all"
              >
                Clear Filters
              </button>
            )}
          </div>
        )}

        {/* Stats */}
        {blogs.length > 0 && (
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <p className="text-sm text-gray-600">Showing {filteredBlogs.length} of {blogs.length} articles</p>
                <p className="text-gray-900 font-medium mt-1">
                  {filteredBlogs.length === blogs.length ? 'All articles' : 'Filtered results'}
                </p>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{blogs.length}</div>
                  <div className="text-xs text-gray-600">Total Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">
                    {blogs.filter(b => b.status === 'published').length}
                  </div>
                  <div className="text-xs text-gray-600">Published</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}