const Comment = require('../models/Comment');
const Blog = require('../models/Blog');

// Create new comment
const createComment = async (req, res) => {
    try {
        const { blogId, text } = req.body;

        // Verify blog exists
        const blog = await Blog.findById(blogId);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        const comment = new Comment({
            blogId,
            userId: req.user._id,
            text
        });

        await comment.save();
        
        // Populate user details
        await comment.populate('userId', 'name');
        
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ message: 'Error creating comment', error: error.message });
    }
};

// Get comments for a blog
const getBlogComments = async (req, res) => {
    try {
        const { blogId } = req.params;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const comments = await Comment.find({ blogId })
            .populate('userId', 'name')
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const total = await Comment.countDocuments({ blogId });

        res.json({
            comments,
            currentPage: page,
            totalPages: Math.ceil(total / limit),
            totalComments: total
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching comments', error: error.message });
    }
};

// Update comment
const updateComment = async (req, res) => {
    try {
        const { text } = req.body;
        const comment = await Comment.findById(req.params.id);

        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        // Check if user is comment author
        if (comment.userId.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Not authorized to update this comment' });
        }

        comment.text = text;
        await comment.save();
        
        await comment.populate('userId', 'name');
        res.json(comment);
    } catch (error) {
        res.status(400).json({ message: 'Error updating comment', error: error.message });
    }
};

// Delete comment
const deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);

        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        // Check if user is comment author or admin
        if (comment.userId.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Not authorized to delete this comment' });
        }

        await comment.remove();
        res.json({ message: 'Comment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting comment', error: error.message });
    }
};

module.exports = {
    createComment,
    getBlogComments,
    updateComment,
    deleteComment
}; 