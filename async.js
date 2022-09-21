const fs = require('fs');
const async = require('async');

async.parallel({
    fileA: (callback) => {
        fs.readFile('fileA.txt', callback);
    },
    fileB: (callback) => {
        fs.readFile('fileB.txt', callback);
    },
    fileC: (callback) => {
        fs.readFile('fileC.txt', callback);
    }
}, (error, result) => {
    console.log(result.fileA);
    console.log(result.fileB);
    console.log(result.fileC.toString());
});