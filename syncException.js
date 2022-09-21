const fs = require('fs');
try {
    const file = fs.readFileSync('none.txt');
    console.log(file);
    console.log(file.toString());
} catch (exception) {
    console.log('파일을 읽어 들이는 데 문제가 발생했습니다.');
    console.log(exception);
}