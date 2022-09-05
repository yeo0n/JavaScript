const error = new Error('메시지');
error.name = '내 마음대로 오류';
error.message = '오류의 메시지';

throw error;