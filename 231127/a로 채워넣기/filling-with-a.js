const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
console.log(input.slice(0, 1) + 'a' + input.slice(2, -2) + 'a' + input.slice(-1));