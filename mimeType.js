const express = require('express');
const fs = require('fs');

const app = express();

//request 이벤트 리스너 설정
app.get('/image', (request, response) => {
    fs.readFile('image.png', (error, data) => {
        //이미지 파일 제공
        response.type('image/png');
        response.send('data');
    });
});

app.get('/audio', (request, response) => {
    fs.readFile('audio.mp3', (error, data) => {
        //음악 파일 제공
        response.type('audio/mpeg');
        response.send('data');
    });
});

//서버 실행
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});