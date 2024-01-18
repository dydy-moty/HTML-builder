const fs = require('node:fs');
const path = require('node:path');
const { stdin, stdout } = require('node:process');
const addr = path.join(__dirname, 'newFile.txt');

const readText = fs.createWriteStream(addr);

stdout.write('Write something: ');
stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    stdout.write('Bye bye!')
    process.exit(0);
  }
  readText.write(data);
})




