const fs = require('fs');
const [input, target] = fs.readFileSync(0).toString().trim().split("\n");
const index = input.indexOf(target);
console.log(index);