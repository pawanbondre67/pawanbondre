import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Heart, Eye, Clock, User, ArrowLeft, Filter, ChevronDown } from "lucide-react";
import { blogApi, CategoryApi } from '@/services/api';
import { motion } from 'framer-motion';
import { BlogDetail } from './BlogDetail';
import { Auth } from './Auth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BackgroundBeams } from './ui/background-beam';

interface Blog {
  _id: string;
  title: string;
  content: string;
  featuredImage: string;
  authorId: {
    name: string;
  };
  categoryId: {
    _id: string;
    name: string;
  };
  likes: string[];
  views: number;
  createdAt: string;
}

interface Category {
  _id: string;
  name: string;
}

export function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await blogApi.getBlogs();
      setBlogs(response.data.blogs);
      setTotalPages(response.data.totalPages);
      setCurrentPage(response.data.currentPage);
      setError(null);
    } catch (err) {
      setError('Failed to fetch blogs');
      console.error('Error fetching blogs:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await CategoryApi.getAllCategories();
      setCategories(response.data);
    } catch (err) {
      console.error('Error fetching categories:', err);
    }
  };

  useEffect(() => {
    fetchBlogs();
    fetchCategories();
  }, []);

  const handleLike = async (blogId: string) => {
    if (!isAuthenticated) {
      setShowAuth(true);
      return;
    }

    try {
      const response = await blogApi.toggleLike(blogId);
      const updatedBlogs = blogs.map(blog => 
        blog._id === blogId ? { ...blog, likes: response.data.likes } : blog
      );
      setBlogs(updatedBlogs);
      
      if (selectedBlog && selectedBlog._id === blogId) {
        setSelectedBlog(prev => prev ? { ...prev, likes: response.data.likes } : null);
      }
    } catch (err) {
      console.error('Error liking blog:', err);
    }
  };

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    setShowAuth(false);
  };

  const handleBlogSelect = (blog: Blog) => {
    setSelectedBlog(blog);
  };

  const handleBackToList = () => {
    setSelectedBlog(null);
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1); // Reset to first page when changing category
  };

  const filteredBlogs = selectedCategory === 'all' 
    ? blogs 
    : blogs.filter(blog => blog.categoryId._id === selectedCategory);

  const renderLikeButton = (blog: Blog) => (
    <Button
      variant="ghost"
      size="sm"
      onClick={(e) => {
        e.stopPropagation();
        handleLike(blog._id);
      }}
      className="flex items-center gap-1 hover:text-red-500 transition-colors"
    >
      <Heart className={`w-4 h-4 ${blog.likes.includes(localStorage.getItem('userId') || '') ? 'fill-red-500 text-red-500' : ''}`} />
      <span>{blog.likes.length}</span>
    </Button>
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        
        <div className="text-red-500 text-center p-4 bg-red-50 rounded-lg">
          <p className="text-lg font-semibold">{error}</p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => fetchBlogs()}
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  if (selectedBlog) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen bg-gray-50"
      >
        
        <div className="container mx-auto px-4">
          <motion.button 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            onClick={handleBackToList}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blogs
          </motion.button>
          <BlogDetail blog={selectedBlog} onLike={handleLike} />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div className="min-h-screen py-12">
      <Auth 
        isOpen={showAuth} 
        onClose={() => setShowAuth(false)} 
        onAuthSuccess={handleAuthSuccess} 
      />
      <div className="container mx-auto px-4">
        <BackgroundBeams className="absolute inset-0 -z-10" />

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 relative"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium">
              <span className="animate-pulse mr-2">⚡</span>
              Welcome to the Tech Universe
            </span>
          </motion.div>

          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4"
          >
            🚀 Developer's Corner
          </motion.h2>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-6"
          >
            {['Web Dev', 'AI/ML', 'Cloud', 'DevOps'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-gray-200 border border-gray-700"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Exploring cutting-edge technologies, sharing coding insights, and documenting my journey through the ever-evolving world of software development. From web frameworks to AI integration, join me in discovering the future of tech.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-6 flex justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-lg border border-blue-500/30"
            >
              <span className="text-blue-400">👨‍💻</span>
              <span className="text-gray-200">Daily Coding</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-lg border border-purple-500/30"
            >
              <span className="text-purple-400">🎯</span>
              <span className="text-gray-200">Tech Insights</span>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8 text-white"
        >
          Latest Blog Posts
        </motion.h1>

        {/* Category Filter Dropdown */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-end items-center gap-4 mb-8"
        >
          {isAuthenticated && (
            <Button
              variant="outline"
              onClick={() => {
                localStorage.removeItem('token');
                localStorage.removeItem('userId');
                setIsAuthenticated(false);
              }}
              className="flex items-center gap-2 hover:bg-red-50 hover:text-red-600 hover:border-red-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-log-out"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" x2="9" y1="12" y2="12" />
              </svg>
              Logout
            </Button>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                className="flex items-center gap-2 min-w-[200px]"
              >
                <Filter className="w-4 h-4" />
                <span>
                  {selectedCategory === 'all' 
                    ? 'All Categories' 
                    : categories.find(c => c._id === selectedCategory)?.name || 'Select Category'}
                </span>
                <ChevronDown className="w-4 h-4 ml-auto" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-[200px]">
              <DropdownMenuItem
                onClick={() => handleCategoryChange('all')}
                className={`cursor-pointer ${selectedCategory === 'all' ? 'bg-gray-100' : ''}`}
              >
                All Categories
              </DropdownMenuItem>
              {categories.map((category) => (
                <DropdownMenuItem
                  key={category._id}
                  onClick={() => handleCategoryChange(category._id)}
                  className={`cursor-pointer ${selectedCategory === category._id ? 'bg-gray-100' : ''}`}
                >
                  {category.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </motion.div>
       
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="col-span-full flex flex-col items-center justify-center py-12 px-4 text-center"
            >
              <div className="bg-gray-50 rounded-full p-4 mb-4">
                <Filter className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No Blogs Available
              </h3>
              <p className="text-gray-600 max-w-md">
                {selectedCategory === 'all' 
                  ? "There are no blogs available at the moment. Please check back later."
                  : `No blogs found in the "${categories.find(c => c._id === selectedCategory)?.name}" category.`}
              </p>
              {selectedCategory !== 'all' && (
                <Button
                  variant="outline"
                  onClick={() => handleCategoryChange('all')}
                  className="mt-4"
                >
                  View All Categories
                </Button>
              )}
            </motion.div>
          ) : (
            filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                onClick={() => handleBlogSelect(blog)}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <div className="relative">
                  <img
                    src="https://picsum.photos/200"
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
                    {blog.categoryId.name}
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3 text-gray-800 hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h2>
                  
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {blog.content}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      {renderLikeButton(blog)}
                      <div className="flex items-center gap-1 text-gray-600">
                        <Eye className="w-4 h-4" />
                        <span>{blog.views}</span>
                      </div>
                    </div>
                    <Button 
                      variant="link" 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBlogSelect(blog);
                      }}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Read More →
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-12">
          <Button
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-6 py-2 rounded-full hover:bg-blue-50 disabled:opacity-50"
          >
            Previous
          </Button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => setCurrentPage(page)}
                className="w-10 h-10 rounded-full"
              >
                {page}
              </Button>
            ))}
          </div>
          <Button
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-6 py-2 rounded-full hover:bg-blue-50 disabled:opacity-50"
          >
            Next
          </Button>
        </div>
      </div>
    </motion.div>
  );
}