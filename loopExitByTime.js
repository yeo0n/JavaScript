let start = new Date().getTime();
let count = 0;

while (start + (1000 * 3) > new Date().getTime()) {
    count ++;
}

console.log(count + "만큼 반복했습니다.");