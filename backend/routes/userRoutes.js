const express = require('express');
const router = express.Router();
const { auth, adminAuth } = require('../middleware/auth');
const {
    register,
    login,
    getProfile,
    updateProfile,
    getAllUsers
} = require('../controllers/userController');

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/profile', auth, getProfile);
router.patch('/profile', auth, updateProfile);

// Admin routes
router.get('/all', adminAuth, getAllUsers);

module.exports = router; 