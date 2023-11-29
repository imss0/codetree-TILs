const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const first = input[0];
const second = input[1];
let res = "";
for (let i = 0; i < input.length; i++) {
    if (input[i] === first) res += second;
    else if (input[i] === second) res += first;
    else res += input[i];
}

console.log(res);