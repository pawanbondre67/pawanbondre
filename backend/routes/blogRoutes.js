const express = require('express');
const router = express.Router();
const { auth, adminAuth } = require('../middleware/auth');
const {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
    toggleLike,
    searchBlogs
} = require('../controllers/blogController');

// Public routes
router.get('/', getAllBlogs);
router.get('/search', searchBlogs);
router.get('/:id', getBlogById);

// Protected routes
router.post('/', auth, adminAuth, createBlog);
router.patch('/:id', auth, adminAuth, updateBlog);
router.delete('/:id', auth, adminAuth, deleteBlog);
router.post('/:id/like', auth, toggleLike);

module.exports = router; 