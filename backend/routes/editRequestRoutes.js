const express = require('express');
const router = express.Router();
const { auth, adminAuth } = require('../middleware/auth');
const {
    createEditRequest,
    getAllEditRequests,
    getUserEditRequests,
    updateEditRequestStatus,
    deleteEditRequest
} = require('../controllers/editRequestController');

// Protected routes
router.post('/', auth, createEditRequest);
router.get('/my-requests', auth, getUserEditRequests);
router.delete('/:id', auth, deleteEditRequest);

// Admin routes
router.get('/all', auth, adminAuth, getAllEditRequests);
router.patch('/:id/status', auth, adminAuth, updateEditRequestStatus);

module.exports = router; 