const fs = require('fs');
const input = fs.readFileSync(0).toString();

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