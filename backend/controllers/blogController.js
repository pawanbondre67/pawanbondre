const Blog = require('../models/Blog');
const User = require('../models/User');
const Category = require('../models/Category');

// Create new blog
const createBlog = async (req, res) => {
    try {
        const { title, content, featuredImage, categoryId } = req.body;
        
        // Verify category exists
        const category = await Category.findById(categoryId);
        if (!category) {
            return res.status(400).json({ message: 'Category not found' });
        }

        const blog = new Blog({
            title,
            content,
            featuredImage,
            categoryId,
            authorId: req.user._id
        });

        await blog.save();
        res.status(201).json(blog);
    } catch (error) {
        res.status(500).json({ message: 'Error creating blog', error: error.message });
    }
};

// Get all blogs with pagination
const getAllBlogs = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const blogs = await Blog.find()
            .populate('authorId', 'name')
            .populate('categoryId', 'name')
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const total = await Blog.countDocuments();

        res.json({
            blogs,
            currentPage: page,
            totalPages: Math.ceil(total / limit),
            totalBlogs: total
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching blogs', error: error.message });
    }
};

// Get single blog by ID
const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id)
            .populate('authorId', 'name')
            .populate('categoryId', 'name');

        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        // Increment views
        blog.views += 1;
        await blog.save();

        res.json(blog);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching blog', error: error.message });
    }
};

// Update blog
const updateBlog = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['title', 'content', 'featuredImage', 'categoryId'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).json({ message: 'Invalid updates' });
    }

    try {
        const blog = await Blog.findById(req.params.id);
        
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        // Check if user is author or admin
        if (blog.authorId.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Not authorized to update this blog' });
        }

        updates.forEach(update => blog[update] = req.body[update]);
        await blog.save();
        res.json(blog);
    } catch (error) {
        res.status(400).json({ message: 'Error updating blog', error: error.message });
    }
};

// Delete blog
const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        // Check if user is author or admin
        if (blog.authorId.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Not authorized to delete this blog' });
        }

        await blog.remove();
        res.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting blog', error: error.message });
    }
};

// Like/Unlike blog
const toggleLike = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        const likeIndex = blog.likes.indexOf(req.user._id);
        
        if (likeIndex === -1) {
            blog.likes.push(req.user._id);
        } else {
            blog.likes.splice(likeIndex, 1);
        }

        await blog.save();
        res.json(blog);
    } catch (error) {
        res.status(500).json({ message: 'Error toggling like', error: error.message });
    }
};

// Search blogs
const searchBlogs = async (req, res) => {
    try {
        const { query } = req.query;
        const blogs = await Blog.find(
            { $text: { $search: query } },
            { score: { $meta: "textScore" } }
        )
        .sort({ score: { $meta: "textScore" } })
        .populate('authorId', 'name')
        .populate('categoryId', 'name');

        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: 'Error searching blogs', error: error.message });
    }
};

module.exports = {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
    toggleLike,
    searchBlogs
}; 