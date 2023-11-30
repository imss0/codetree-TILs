const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
console.log(input[0] + input.slice(2, -2) + input.slice(-1));