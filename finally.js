function test() {
    try {
        const array = new Array(-2000);
    } catch (exception) {
        console.log(`${exception.name} 예외가 발생했습니다.`);
        console.log('함수가 종료되었습니다.');
    }
}

test();