const express = require('express');
const app = express();

// 200 OK
app.get('/ok', (req, res) => {
  res.status(200).send('Request successful');
});

// 201 Created
app.post('/create', (req, res) => {
  res.status(201).send('Resource created');
});

// 400 Bad Request
app.get('/bad', (req, res) => {
  res.status(400).send('Bad request');
});

// 401 Unauthorized
app.get('/unauthorized', (req, res) => {
  res.status(401).send('Unauthorized');
});

// 403 Forbidden
app.get('/forbidden', (req, res) => {
  res.status(403).send('Forbidden');
});

// 500 Internal Server Error
app.get('/error', (req, res) => {
  res.status(500).send('Internal server error');
});

// 404 Not Found
app.use((req, res) => {
  res.status(404).send('Route not found');
});

app.listen(4000, () => {
  console.log('Status code server running on port 4000');
});
