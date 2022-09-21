process.on('exit', (code) => {
    console.log('프로세스 종료되었습니다.');
    console.log(`exit 이벤트 매개 변수: ${code}`);
});
process.on('uncaughtException', (error) => {
    console.log('예외가 발생했습니다.');
    console.log(`uncaughtException 이벤트 매개 변수: ${error}`);
});

error.error.error();