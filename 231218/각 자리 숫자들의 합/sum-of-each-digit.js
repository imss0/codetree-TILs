const fs = require('fs')
const n = fs.readFileSync(0).toString().trim();
let res = 0;
for (let i = 0; i < n.length; i++) {
    res += +n[i]
}

console.log(res)