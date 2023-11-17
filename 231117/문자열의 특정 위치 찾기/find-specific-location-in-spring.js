const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(" ");
const index = a.indexOf(b);
index === -1 ? console.log('No') : console.log(index);