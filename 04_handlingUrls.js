const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req, res) => {

    // Ignore favicon
    if (req.url === '/favicon.ico') {
        res.end();
        return;
    }

    // Parse URL with query parameters
    const myUrl = url.parse(req.url, true);
    const { name = 'Guest', id = 'N/A' } = myUrl.query;

    // Log request in IST
    const log = `${req.method} ${req.url}\n`;

    fs.appendFile('server.log', log, (err) => {
        if (err) {
            console.error('Failed to write to log file:', err);
        }
    });

    // Routing
    switch (myUrl.pathname) {

        case '/':
            res.end(`Welcome ${name}! Your ID is ${id}`);
            break;

        case '/about':
            res.end(`About Page\nUser: ${name}\nID: ${id}`);
            break;

        case '/services':
            res.end(`Services Page\nUser: ${name}\nID: ${id}`);
            break;

        case '/contact':
            res.end(`Contact Page\nUser: ${name}\nID: ${id}`);
            break;

        default:
            res.end('404 Page Not Found');
    }
});

myServer.listen(3000, () => {
    console.log('Server is listening on port 3000');
});