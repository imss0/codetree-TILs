const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
let str = "";
let startIdx;
if (input.length % 2 === 0) startIdx = input.length - 1;
if (input.length % 2 !== 0) startIdx = input.length - 2;
for (let i = startIdx; i >= 0; i-=2) {
   str += input[i];
}

console.log(str);