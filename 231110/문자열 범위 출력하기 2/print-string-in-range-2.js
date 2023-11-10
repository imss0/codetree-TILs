const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const str = input[0];
const num = +input[1];
let res = "";

for (let i = str.length - 1; i > str.length - num - 1; i--) {
    res += str[i];
}

console.log(res);