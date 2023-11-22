const express = require('express');

// Create express instnace
const app = express();

// Require API routes
app.listen(3000);

// Export the server middleware
app.get('/', (req, res) => {

    res.sendFile('./views/index.html', {root: __dirname});
    });

app.get('/about', (req, res) => {

    res.sendFile('./views/about.html', {root: __dirname});
    });

// Export the server middleware
app.get('/about-us', (req, res) => {

    res.redirect('/about');
    });

app.use((req, res) => {

    res.status(404).sendFile('./views/404.html', {root: __dirname});
    });