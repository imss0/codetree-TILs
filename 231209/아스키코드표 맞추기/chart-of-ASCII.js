const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(" ");
let res = "";
for (let i = 0; i < input.length; i++) {
    res += String.fromCharCode(input[i]);
    res += " "
}

console.log(res)