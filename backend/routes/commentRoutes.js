const express = require('express');
const router = express.Router();
const { auth, adminAuth } = require('../middleware/auth');
const {
    createComment,
    getBlogComments,
    updateComment,
    deleteComment
} = require('../controllers/commentController');

// Public routes
router.get('/blog/:blogId', getBlogComments);

// Protected routes
router.post('/', auth, createComment);
router.patch('/:id', auth, updateComment);
router.delete('/:id', auth, deleteComment);

module.exports = router; 