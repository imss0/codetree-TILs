const fs = require('fs');
const input = fs.readFileSync(0).toString();
// 문자열 앞에서부터 순회하면서
// currChar가 안 바뀌었으면 : currCharCount++
// currChar가 바뀌엇으몀ㄴ : currChar 업데이트 & currCharcount는 1

let currChar = input[0];
let currCharCount = 1;
let res = "";
for (let i = 1; i < input.length; i++) {
    if (input[i] === currChar) {
        currCharCount++;
    } else {
        res += currChar;
        res += currCharCount;
        currChar = input[i];
        currCharCount = 1;
    }
}
res += currChar;
res += currCharCount;

console.log(res.length)
console.log(res)