const fs = require('fs');

fs.writeFile('example.txt', 'Hello World', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully');
    }
});

fs.appendFile('example.txt', '\nAppended Text', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
    } else {
        console.log('Text appended successfully');
    }
});

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);  
    } else {
        console.log('File contents:', data);
    }
});

fs.unlink('example.txt', (err) => {
    if (err) {
        console.error('Error deleting file:', err);
    } else {
        console.log('File deleted successfully');
    }
});

fs.rename('example.txt', 'newname.txt', (err) => {
    if (err) {
        console.error('Error renaming file:', err);
    } else {
        console.log('File renamed successfully');
    }
});