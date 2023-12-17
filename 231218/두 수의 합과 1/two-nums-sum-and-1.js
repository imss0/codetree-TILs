const fs = require('fs')
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let count = 0;
const str = (a + b).toString();
for (let i = 0; i < str.length; i++) {
    if (str[i] === '1') count++;
}

console.log(count)