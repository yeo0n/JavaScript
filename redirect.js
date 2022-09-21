const { response } = require('express');
const express = require('express');

//서버 생성
const app = express();

//request 이벤트 리스너 설정
app.get('*', (request, response) => {
    response.redirect('http://hanbit.co.kr');
});

app.listen(52273, () => {
    console.log('Server running at http:127.0.0.1:52273');
});