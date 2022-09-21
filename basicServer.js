const { response } = require('express');
const express = require('express');

//서버 생성
const app = express();

//request 이벤트 리스너 설정
app.use((request, response) => {
    response.send('<h1>가져오고 있으니까 기다려라 </h1>');
});

//서버 실행
app.listen(52273, () => {
    console.log('http://127.0.0.1:52273 여기 들어가보셈');
});