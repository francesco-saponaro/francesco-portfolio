const mongoose = require('mongoose');

// Import Testimonial and Project models
const Testimonial = require('../models/testimonial');
const Project = require('../models/project');

// Import the testimonials and projects json files, which contains all data to be seeded
const testimonials = require('./testimonials');
const projects = require('./projects');

// Setting config file, in this case we need it to connect our database, as
// mongos credentials are in the config.env file.
require('dotenv').config({ path: 'backend/config/config.env' });
// Connecting to database
mongoose
    .connect(process.env.DB_URI)
    .then(con => {console.log(`Database connected with HOST: ${con.connection.host}`)
})

// Function to upload all data from imported json files onto mongoDB.
// This file is then added in the package.json file as command named "seeder",
// Which will allow us to call this function by running "npm run seeder".
const seedData = async () => {

    try {

        await Project.deleteMany();
        console.log('Projects deleted');

        await Project.insertMany(projects);
        console.log('Projects added');

        await Testimonial.deleteMany();
        console.log('Testimonials deleted');

        await Testimonial.insertMany(testimonials);
        console.log('Testimonials added');

        process.exit();

    } catch(error) {

        console.log(error.message);
        process.exit();
    }
}

seedData();

