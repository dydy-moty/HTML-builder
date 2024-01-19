const fs = require('node:fs');
const path = require('node:path');
const addr = path.join(__dirname, 'secret-folder');

fs.readdir(addr, {withFileTypes: true}, (err, data) => {

    if (err) throw err;
    data.forEach((file) => {
        if (file.isFile()) {
           console.log(file.name.slice(0, file.name.indexOf('.')) + ' - ' + path.extname(file.name).slice(1) + ' - ' + fs.statSync(addr + '\\' + file.name).size/1000 + 'kb')
        };
    })
})