import { Button } from "@/components/ui/button";
import { Heart, Eye, Clock, User, Tag, Share2 } from "lucide-react";
import { Auth } from './Auth';
import { useState } from 'react';

interface Blog {
  _id: string;
  title: string;
  content: string;
  featuredImage: string;
  authorId: {
    name: string;
  };
  categoryId: {
    name: string;
  };
  likes: string[];
  views: number;
  createdAt: string;
}

interface BlogDetailProps {
  blog: Blog;
  onLike: (blogId: string) => Promise<void>;
}

export function BlogDetail({ blog, onLike }: BlogDetailProps) {
  const [showAuth, setShowAuth] = useState(false);
  const isAuthenticated = !!localStorage.getItem('token');

  const handleLike = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isAuthenticated) {
      setShowAuth(true);
      return;
    }
    try {
      await onLike(blog._id);
    } catch (err) {
      console.error('Error liking blog:', err);
    }
  };

  const handleAuthSuccess = () => {
    setShowAuth(false);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.content.substring(0, 100) + '...',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Auth 
        isOpen={showAuth} 
        onClose={() => setShowAuth(false)} 
        onAuthSuccess={handleAuthSuccess} 
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-4xl">
        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative">
            <img
              src="https://picsum.photos/200"
              alt={blog.title}
              className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover"
            />
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/90 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
              {blog.categoryId.name}
            </div>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-800">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
              <div className="flex items-center gap-1 sm:gap-2">
                <User className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="truncate max-w-[120px] sm:max-w-[200px]">{blog.authorId.name}</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Tag className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="truncate max-w-[100px] sm:max-w-[150px]">{blog.categoryId.name}</span>
              </div>
            </div>

            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mb-6 sm:mb-8">
              {blog.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-3 sm:mb-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 pt-4 sm:pt-6 border-t">
              <div className="flex items-center gap-4 sm:gap-6">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLike}
                  className="flex items-center gap-1 sm:gap-2 hover:text-red-500 transition-colors text-sm sm:text-base"
                >
                  <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${blog.likes.includes(localStorage.getItem('userId') || '') ? 'fill-red-500 text-red-500' : ''}`} />
                  <span>{blog.likes.length} Likes</span>
                </Button>
                <div className="flex items-center gap-1 sm:gap-2 text-gray-600 text-sm sm:text-base">
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{blog.views} Views</span>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base w-full sm:w-auto justify-center"
              >
                <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                Share
              </Button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
} 