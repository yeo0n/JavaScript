let array = ["사과", "배", "포도", "딸기", "바나나"];

for (let i in array) {
    console.log(`${i}번째 요소: ${array[i]}`);
}

console.log("\n\n-------------구분선----------------\n\n");

for (let item of array) {
    console.log(item);
}