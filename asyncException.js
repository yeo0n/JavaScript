const fs = require('fs');

fs.readFile('textfile.txt', (error, file) => {
    if (error) {
        console.log('파일을 읽어 들이는 데 문제가 발생했습니다.');
        console.log(error);
    } else {
        console.log(file);
        console.log(file.toString());
    }
});