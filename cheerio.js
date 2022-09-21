const request = require('request');
const cheerio = require('cheerio');

const url = 'http://www.hanbit.co.kr/store/books/new_book_list.html';
request(url, (error, response, body) => {
    // cheerio 모듈을 사용합니다.
    const $ = cheerio.load(body);

    //데이터 추출
    $('.view_box').each((index, element) => {
        //변수 선언
        const title = $(element).find('.book_tit').text().trim();
        let writer = $(element).find('.book_writer').text().trim();
        writer = writer.split(',').map((item) => item.trim());

        //출력
        console.log(title);
        console.log(writer);
        console.log();
    });
});