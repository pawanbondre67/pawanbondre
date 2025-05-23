const EditRequest = require('../models/EditRequest');
const Blog = require('../models/Blog');

// Create edit request
const createEditRequest = async (req, res) => {
    try {
        const { blogId, proposedChanges } = req.body;

        // Verify blog exists
        const blog = await Blog.findById(blogId);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        // Check if user already has a pending request for this blog
        const existingRequest = await EditRequest.findOne({
            blogId,
            userId: req.user._id,
            status: 'pending'
        });

        if (existingRequest) {
            return res.status(400).json({ message: 'You already have a pending edit request for this blog' });
        }

        const editRequest = new EditRequest({
            blogId,
            userId: req.user._id,
            proposedChanges
        });

        await editRequest.save();
        res.status(201).json(editRequest);
    } catch (error) {
        res.status(500).json({ message: 'Error creating edit request', error: error.message });
    }
};

// Get all edit requests (admin only)
const getAllEditRequests = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const editRequests = await EditRequest.find()
            .populate('userId', 'name')
            .populate('blogId', 'title')
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const total = await EditRequest.countDocuments();

        res.json({
            editRequests,
            currentPage: page,
            totalPages: Math.ceil(total / limit),
            totalRequests: total
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching edit requests', error: error.message });
    }
};

// Get user's edit requests
const getUserEditRequests = async (req, res) => {
    try {
        const editRequests = await EditRequest.find({ userId: req.user._id })
            .populate('blogId', 'title')
            .sort({ createdAt: -1 });

        res.json(editRequests);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching edit requests', error: error.message });
    }
};

// Update edit request status (admin only)
const updateEditRequestStatus = async (req, res) => {
    try {
        const { status, adminResponse } = req.body;
        const editRequest = await EditRequest.findById(req.params.id);

        if (!editRequest) {
            return res.status(404).json({ message: 'Edit request not found' });
        }

        if (status === 'approved') {
            // Apply changes to blog
            const blog = await Blog.findById(editRequest.blogId);
            if (!blog) {
                return res.status(404).json({ message: 'Blog not found' });
            }

            // Apply proposed changes
            Object.assign(blog, editRequest.proposedChanges);
            await blog.save();
        }

        editRequest.status = status;
        if (adminResponse) {
            editRequest.adminResponse = adminResponse;
        }

        await editRequest.save();
        res.json(editRequest);
    } catch (error) {
        res.status(400).json({ message: 'Error updating edit request', error: error.message });
    }
};

// Delete edit request
const deleteEditRequest = async (req, res) => {
    try {
        const editRequest = await EditRequest.findById(req.params.id);

        if (!editRequest) {
            return res.status(404).json({ message: 'Edit request not found' });
        }

        // Check if user is request author or admin
        if (editRequest.userId.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Not authorized to delete this edit request' });
        }

        await editRequest.remove();
        res.json({ message: 'Edit request deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting edit request', error: error.message });
    }
};

module.exports = {
    createEditRequest,
    getAllEditRequests,
    getUserEditRequests,
    updateEditRequestStatus,
    deleteEditRequest
}; 