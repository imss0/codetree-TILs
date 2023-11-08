const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(" ");
const len = input.length
for (let i = 0; i < len; i++) {
    console.log(input[len - i - 1]);
}