const express = require('express');
const router = express.Router();

// Import project model
const Project = require('../models/project');

router.get('/projects', (req, res) => {
    Project
        .find()
        .then(projects => res.json({
            success: true,
            projects
        }))
        .catch(err => res.status(404).json({
            success: false,  
            error: err
        }))
});

router.get('/project/:id', (req, res) => {
    Project
        .findById(req.params.id)
        .then(project => res.json({
            success: true,
            project
        }))
        .catch(err => res.status(404).json({
            success: false,
            error: err
        }))
});

module.exports = router;