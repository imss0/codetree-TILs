const fs = require('fs');
const n = +fs.readFileSync(0).toString().trim();
let res = ""

for (let i = 1; i <= n; i++) {
    if (i % 3 === 0|| i.toString().includes('3') || i.toString().includes('6') || i.toString().includes('9')) res += '0 ';
    else res += `${i} `
}

console.log(res);