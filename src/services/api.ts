import axios from 'axios';

const baseURL = 'https://pawanbondre.onrender.com/api';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const blogApi = {
  // Get all blogs with pagination
  getBlogs: () => 
    api.get(`/blogs`),


  getBlogById: (id: string) => 
    api.get(`/blogs/${id}`),


  toggleLike: (blogId: string) => 
    api.post(`/blogs/${blogId}/like`),


  createBlog: (data: {
    title: string;
    content: string;
    featuredImage: string;
    categoryId: string;
  }) => api.post('/blogs', data),


  updateBlog: (id: string, data: {
    title?: string;
    content?: string;
    featuredImage?: string;
    categoryId?: string;
  }) => api.put(`/blogs/${id}`, data),


  deleteBlog: (id: string) => 
    api.delete(`/blogs/${id}`),


  searchBlogs: (query: string) => 
    api.get(`/blogs/search?query=${query}`),
};



export const CategoryApi = {

  getAllCategories: () => 
    api.get('/categories'),


  getCategoryById: (id: string) => 
    api.get(`/categories/${id}`),


  createCategory: (data: { name: string }) => 
    api.post('/categories', data),

 
  updateCategory: (id: string, data: { name: string }) => 
    api.put(`/categories/${id}`, data),


  deleteCategory: (id: string) => 
    api.delete(`/categories/${id}`),
};

export default api; 