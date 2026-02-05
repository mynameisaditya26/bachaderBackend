const express = require('express');
const app = express();

// Read request headers
app.get('/read-header', (req, res) => {
  const userAgent = req.headers['user-agent'];
  const host = req.headers['host'];

  res.send({
    message: 'Request headers received',
    userAgent: userAgent,
    host: host
  });
});

// Set response headers
app.get('/set-header', (req, res) => {
  res.set('X-App-Name', 'Express-Headers');
  res.set('Cache-Control', 'no-cache');

  res.send('Response headers set successfully');
});

// Set multiple headers
app.get('/multi-header', (req, res) => {
  res.set({
    'Content-Type': 'application/json',
    'X-Powered-By': 'Express'
  });

  res.send({ message: 'Multiple headers sent' });
});

app.listen(3000, () => {
  console.log('Header server running on port 3000');
});
