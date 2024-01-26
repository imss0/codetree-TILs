const fs = require('fs')
const [a, b, c] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let max = a;

if (b > a) max = b;
if (c > b) max = c;

console.log(max);