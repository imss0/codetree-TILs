const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(" ");
console.log(a.slice(0, 2) + b.slice(2));