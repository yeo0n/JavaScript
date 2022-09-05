try {
    throw '예외가 발생했습니다!';
} catch (exception) {
    console.log('예외가 발생했습니다.');
    console.log(exception);
}