const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
let ee = input.includes('ee') ? 'Yes' : 'No'
let ab = input.includes('ab') ? 'Yes' : 'No'
console.log(ee, ab)