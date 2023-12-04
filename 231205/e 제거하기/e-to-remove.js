const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const index = input.indexOf('e');
console.log(input.slice(0, index) + input.slice(index + 1))