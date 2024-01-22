const fs = require('fs');
const [a, b, c] = fs.readFileSync(0).toString().split(" ").map(Number);

let min = a <= b ? a : b;
min = c <= min ? c : min;

console.log(min)