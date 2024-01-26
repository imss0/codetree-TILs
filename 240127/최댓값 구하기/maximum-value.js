const fs = require('fs')
const [a, b, c] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let max;

if (a > b) {
    if (a > c) max = a;
    else max = c;
} else {
    if (c > b) max = c;
    else max = b;
}
console.log(max);