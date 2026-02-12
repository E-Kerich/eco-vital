import { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../api/axios";
import { Calendar, User, Clock, Tag, ArrowRight, Share2, Bookmark, Menu } from "lucide-react";

export default function PublicBlogDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
    }, []);
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [bookmarked, setBookmarked] = useState(false);
  const [headings, setHeadings] = useState([]);
  const [activeHeading, setActiveHeading] = useState("");
  const contentRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    api.get(`/blogs/${slug}`).then(res => {
      setBlog(res.data);
      // Extract headings from content for table of contents
      extractHeadings(res.data.content);
      // Fetch all blogs for related articles
      api.get("/blogs").then(blogsRes => {
        const related = blogsRes.data
          .filter(b => b._id !== res.data._id && b.status === 'published')
          .slice(0, 3);
        setRelatedBlogs(related);
        setLoading(false);
      });
    }).catch(() => {
      setLoading(false);
    });
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map(h => document.getElementById(h.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = headingElements.length - 1; i >= 0; i--) {
        if (headingElements[i] && headingElements[i].offsetTop <= scrollPosition) {
          setActiveHeading(headingElements[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  const extractHeadings = (htmlContent) => {
    if (!htmlContent) return;
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const headingElements = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const extractedHeadings = Array.from(headingElements)
      .filter(heading => heading.textContent.trim())
      .map((heading, index) => ({
        id: `heading-${index}`,
        text: heading.textContent,
        level: parseInt(heading.tagName.substring(1))
      }));
    setHeadings(extractedHeadings);
  };

  const formatReadingTime = (content) => {
    if (!content) return '2 min read';
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readingTime} min read`;
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog.title,
          text: blog.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-700">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center px-6">
          <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Tag className="w-8 h-8 text-emerald-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The article you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Browse All Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="border-b border-gray-100 sticky top-0 bg-white z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/blogs"
              className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors rounded-lg"
            >
              ← Back to Articles
            </Link>
            <div className="flex items-center gap-3">
              <button
                onClick={handleShare}
                className="p-2 text-gray-500 hover:text-emerald-600 transition-colors rounded-lg"
                aria-label="Share article"
              >
                <Share2 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setBookmarked(!bookmarked)}
                className={`p-2 transition-colors rounded-lg ${
                  bookmarked ? 'text-emerald-600' : 'text-gray-500 hover:text-emerald-600'
                }`}
                aria-label={bookmarked ? "Remove bookmark" : "Bookmark article"}
              >
                <Bookmark className={`w-5 h-5 ${bookmarked ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - Split Layout for Large Screens */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
          {/* Left Column - Content */}
          <div className="lg:w-3/5">
            {/* Categories/Tags */}
            {blog.categories && blog.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {blog.categories.slice(0, 3).map((category, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}

            {/* Article Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Excerpt */}
            {blog.excerpt && (
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                {blog.excerpt}
              </p>
            )}

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Eco-Vital Team</span>
              </div>
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
                <span>{formatReadingTime(blog.content)}</span>
              </div>
            </div>
          </div>

          {/* Right Column - Featured Image */}
          {(blog.featuredImage || blog.imageUrl) && (
            <div className="lg:w-2/5 mt-8 lg:mt-0">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={blog.featuredImage || blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex flex-col lg:flex-row lg:gap-12">
          {/* Article Content - Left Column */}
          <div className="lg:w-3/4">
            {/* Mobile Table of Contents */}
            {headings.length > 0 && (
              <div className="lg:hidden mb-8 bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Menu className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Table of Contents</h3>
                </div>
                <div className="space-y-2">
                  {headings.map((heading) => (
                    <button
                      key={heading.id}
                      onClick={() => scrollToHeading(heading.id)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        activeHeading === heading.id
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                      style={{ paddingLeft: `${(heading.level - 1) * 20}px` }}
                    >
                      {heading.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Article Content with Styled Headings and Paragraphs */}
            <article
              ref={contentRef}
              className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-gray-900 prose-headings:tracking-tight prose-headings:mt-12 prose-headings:mb-6
                prose-h1:text-4xl prose-h1:border-b prose-h1:border-gray-200 prose-h1:pb-4
                prose-h2:text-3xl prose-h2:border-b prose-h2:border-gray-100 prose-h2:pb-3
                prose-h3:text-2xl
                prose-h4:text-xl
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                prose-p:first-of-type:mt-0
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
                prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
                prose-li:text-gray-700 prose-li:mb-2
                prose-blockquote:border-l-4 prose-blockquote:border-emerald-600 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-700 prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:rounded-r-lg
                prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
                prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:text-emerald-700 hover:prose-a:underline
                prose-code:px-2 prose-code:py-1 prose-code:bg-gray-100 prose-code:text-gray-800 prose-code:rounded-md prose-code:text-sm
                prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:p-4
                prose-hr:my-12 prose-hr:border-gray-200
              "
              dangerouslySetInnerHTML={{
                __html: blog.content?.replace(
                  /<(h[1-6])[^>]*>([^<]+)<\/\1>/g,
                  (match, tag, content, index) => {
                    const id = `heading-${index}`;
                    return `<${tag} id="${id}" class="scroll-mt-24">${content}</${tag}>`;
                  }
                )?.replace(
                  /<p>/g,
                  '<p class="text-gray-700 leading-relaxed mb-6">'
                )?.replace(
                  /<ul>/g,
                  '<ul class="my-6 list-disc pl-6 space-y-2">'
                )?.replace(
                  /<ol>/g,
                  '<ol class="my-6 list-decimal pl-6 space-y-2">'
                )?.replace(
                  /<li>/g,
                  '<li class="text-gray-700">'
                )?.replace(
                  /<blockquote>/g,
                  '<blockquote class="border-l-4 border-emerald-600 pl-6 italic text-gray-700 bg-gray-50 py-4 rounded-r-lg my-6">'
                )?.replace(
                  /<img /g,
                  '<img class="rounded-xl shadow-lg my-8" '
                ) || ''
              }}
            />

            {/* Author Section */}
            <div className="mt-16 bg-gray-50  p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Book an Expert</h3>
                  <p className="text-gray-600 mb-4">
                    Get an expert sustainability consultants dedicated to helping businesses implement 
                    environmentally responsible practices that drive growth and positive impact.
                  </p>
                  <a
                    href="https://calendly.com/ecovitalconsulting/30min"
                    className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-light"
                  >
                    Reserve Your Spot
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Article Footer - Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-medium text-gray-700">Tags:</span>
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Right Column */}
          <div className="lg:w-1/4 mt-12 lg:mt-0">
            {/* Table of Contents - Desktop */}
            {headings.length > 0 && (
              <div className="sticky top-24 hidden lg:block">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
                  <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
                    {headings.map((heading) => (
                      <button
                        key={heading.id}
                        onClick={() => scrollToHeading(heading.id)}
                        className={`block w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                          activeHeading === heading.id
                            ? 'bg-emerald-100 text-emerald-700 font-medium'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                        style={{ paddingLeft: `${(heading.level - 1) * 16}px` }}
                      >
                        {heading.text}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Share & Bookmark Sidebar */}
                <div className="mt-6 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Share This Article</h3>
                  <div className="flex flex-col space-y-3">
                    <button
                      onClick={handleShare}
                      className="flex items-center gap-3 px-4 py-3 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors"
                    >
                      <Share2 className="w-5 h-5" />
                      <span>Share Article</span>
                    </button>
                    <button
                      onClick={() => setBookmarked(!bookmarked)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        bookmarked
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Bookmark className={`w-5 h-5 ${bookmarked ? 'fill-current' : ''}`} />
                      <span>{bookmarked ? 'Bookmarked' : 'Bookmark Article'}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Continue Reading</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore more insights and expert advice from our team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedBlogs.map(relatedBlog => (
                <Link
                  key={relatedBlog._id}
                  to={`/blogs/${relatedBlog.slug}`}
                  className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
                >
                  {relatedBlog.imageUrl && (
                    <div className="h-48 rounded-lg overflow-hidden mb-6">
                      <img
                        src={relatedBlog.imageUrl}
                        alt={relatedBlog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(relatedBlog.createdAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {relatedBlog.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {relatedBlog.excerpt}
                  </p>
                  <div className="mt-4 flex items-center text-emerald-600 font-medium text-sm">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
              >
                View All Articles
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}