const fs = require('fs');
const input = fs.readFileSync(0).toString().split("\n");
let [n, a] = input[0].split(" ");
n = +n;
let count = 0;

for (let i = 1; i < input.length; i++) {
    if (input[i] === a) count++;
}
console.log(count);