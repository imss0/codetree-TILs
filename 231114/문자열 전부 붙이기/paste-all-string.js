const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = +input[0];
let str = "";
for (let i = 0; i < n; i++) {
    str += input[i + 1];
}

console.log(str);