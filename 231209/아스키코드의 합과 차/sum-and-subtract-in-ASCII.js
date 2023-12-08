const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(" ");
const a = input[0].charCodeAt(0)
const b = input[1].charCodeAt(0)

console.log(a + b, Math.abs(a - b))