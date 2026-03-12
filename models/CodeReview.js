const mongoose = require('mongoose');

const CodeReviewSchema = new mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    status: { type: String, enum: ['open', 'closed', 'in progress'], required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CodeReview', CodeReviewSchema);