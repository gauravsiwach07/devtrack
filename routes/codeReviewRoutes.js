const express = require('express');
const router = express.Router();

// Placeholder for code review data
let codeReviews = [];

// GET all code reviews
router.get('/', (req, res) => {
    res.json(codeReviews);
});

// GET a single code review by ID
router.get('/:id', (req, res) => {
    const review = codeReviews.find(r => r.id === parseInt(req.params.id));
    if (!review) return res.status(404).send('Code review not found');
    res.json(review);
});

// POST a new code review
router.post('/', (req, res) => {
    const { title, description } = req.body;
    const newReview = {
        id: codeReviews.length + 1,
        title,
        description,
        createdAt: new Date()
    };
    codeReviews.push(newReview);
    res.status(201).json(newReview);
});

// PUT update an existing code review
router.put('/:id', (req, res) => {
    const review = codeReviews.find(r => r.id === parseInt(req.params.id));
    if (!review) return res.status(404).send('Code review not found');

    const { title, description } = req.body;
    review.title = title;
    review.description = description;

    res.json(review);
});

// DELETE a code review
router.delete('/:id', (req, res) => {
    const reviewIndex = codeReviews.findIndex(r => r.id === parseInt(req.params.id));
    if (reviewIndex === -1) return res.status(404).send('Code review not found');

    const deletedReview = codeReviews.splice(reviewIndex, 1);
    res.json(deletedReview);
});

module.exports = router;