const express = require('express');
const app = express();
// Home page
app.get('/', (req, res) => {
    res.send('Home Page');
});

// About page
app.get('/about', (req, res) => {
    res.send('About Page');
});

// Services page
app.get('/services', (req, res) => {
    res.send('Services Page');
});

// Contact page
app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

// Start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});