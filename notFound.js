const { response } = require('express');
const express = require('express');

//서버 생성
const app = express();

//request 이벤트 리스너 설정
app.get('*', (request, response) => {
    response.status(404);
    response.send('해당 경로에는 아무것도 없습니다.');
});

//서버 실행
app.listen(52273, () => {
    console.log('Server runnig at http://127.0.0.1:52273');
});