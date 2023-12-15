const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
let res = "";
for (let i = 0; i < input.length; i++) {
    if (input[i].charCodeAt(0) >= 'a'.charCodeAt(0) && input[i].charCodeAt(0) <= 'z'.charCodeAt(0)) {
        res += input[i];
    }
    else if (input[i].charCodeAt(0) >= 'A'.charCodeAt(0) && input[i].charCodeAt(0) <= 'Z'.charCodeAt(0)) {
        res += input[i].toLowerCase();
    }
    else if (input[i].charCodeAt(0) >= '0'.charCodeAt(0) && input[i].charCodeAt(0) <= '9'.charCodeAt(0)) {
        res += input[i];
    } 
}

console.log(res)