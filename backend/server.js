const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path')

// Create express app
const app = express();

// Import all routes from routes files
const projectRoutes = require('./routes/projectRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');

// The app will use the below url, which is /api/v1 + any route in the routes files 
app.use('/api/v1', projectRoutes);
app.use('/api/v1', testimonialRoutes);

// Bodyparser Middleware
app.use(bodyParser.json());

// Setting up config.env file if not in PRODUCTION mode, as in production the config files are uploaded
// from Heroku
if(process.env.NODE_ENV !== 'PRODUCTION') {
    // Setting up config file for development mode, in order to be able to retrieve data in config file
    require('dotenv').config({ path: 'backend/config/config.env' })
}

// If in PRODUCTION mode run the app with the 'build' folder, which is an optimized version
// of the app for deployment
if(process.env.NODE_ENV === 'PRODUCTION') {

    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
    })
}

// Connect to MongoDB
mongoose
    .connect('mongodb+srv://fran:new-portfolio@new-portfolio.46ypb.mongodb.net/?retryWrites=true&w=majority')
    .then(con => {console.log(`Database connected with HOST: ${con.connection.host}`)
})

// Start the server on required PORT.
app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
});