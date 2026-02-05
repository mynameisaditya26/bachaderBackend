const http = require('http');
const fs = require('fs');

// Function to get IST time
function getISTTime() {
    return new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
    });
}

const myServer = http.createServer((req, res) => {

    // Ignore favicon
    if (req.url === '/favicon.ico') {
        res.end();
        return;
    }

    // Log request in IST
    const log = `${getISTTime()} - ${req.method} ${req.url}\n`;

    fs.appendFile('server.log', log, (err) => {
        if (err) {
            console.error('Failed to write to log file:', err);
        }
    });

    // Routing
    if (req.url === '/') {
        res.end('Welcome to Home Page');
    }
    else if (req.url === '/about') {
        res.end('This is About Page');
    }
    else if (req.url === '/services') {
        res.end('Our Services Page');
    }
    else if (req.url === '/contact') {
        res.end('Contact Us Page');
    }
    else {
        res.end('404 Page Not Found');
    }
});

myServer.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
