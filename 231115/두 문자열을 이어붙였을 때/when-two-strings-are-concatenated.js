const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split("\n")

a + b === b + a ? console.log(true) : console.log(false);