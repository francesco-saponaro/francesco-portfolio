const express = require('express');
const testimonial = require('../models/testimonial');
const router = express.Router();

// Import project model
const Testimonial = require('../models/testimonial');

router.get('/testimonials', (req, res) => {
    Testimonial
        .find()
        .sort({ date: -1 })
        .then(testimonials => res.json({
            success: true,
            testimonials
        }))
        .catch(err => res.status(404).json({
            success: false,
            error: err
        }))
});

router.post('/testimonial', (req, res) => {
    Testimonial
        .create(req.body)
        .then(testimonial => res.json({
            success: true,
            testimonial 
        }))
        .catch(err => res.status(404).json({
            success: false,
            error: err
        }))
})

module.exports = router;