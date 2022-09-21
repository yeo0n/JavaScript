const fs = require('fs');
const { fileURLToPath } = require('url');

fs.readFile('textfile.txt', (error, file) => {
    console.log(file);
    console.log(file.toString());
})