const fs = require('node:fs');
const path = require('node:path');
const addr = path.join(__dirname, 'text.txt');
const readText = fs.createReadStream(addr);

readText.on('data', chunk => {
    console.log(`${chunk}`);
});