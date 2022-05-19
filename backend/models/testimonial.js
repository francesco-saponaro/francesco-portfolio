// Import mongoose
const mongoose = require('mongoose');

// Testimonial model schema
const testimonialSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Please enter project name']
    },
    relationship: {
        type: String,
        required: [true, 'Please enter your relation to Francesco']
    },
    testimonial: {
        type: String,
        required: [true, 'Please enter your testimonial']
    },
    date: {
        type: String,
        default: Date.now
    }
});

// We call the model 'Testimonial' and it uses the testimonialSchema
module.exports = mongoose.model('Testimonial', testimonialSchema);