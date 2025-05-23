const mongoose = require('mongoose');

const editRequestSchema = new mongoose.Schema({
    blogId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    proposedChanges: {
        type: Object,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    adminResponse: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('EditRequest', editRequestSchema); 