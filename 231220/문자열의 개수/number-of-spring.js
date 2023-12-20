const fs = require('fs');
const input = fs.readFileSync(0).toString().split("\n");

let count = 0;
let odds = [];
for (let i = 0; i < input.length; i++) {
    if (input[i] === '0') break;
    if (i % 2 === 0) odds.push(input[i]);
    count++;
}

console.log(count)
for (let i = 0; i < odds.length; i++) {
    console.log(odds[i])
}