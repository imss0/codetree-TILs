const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().split("\n");

let n = -1;
for (let i = 1; i < a.length; i++) {
    if(a.slice(-i) + a.slice(0, a.length - i) === b) {
        n = i;
        break;
    }
}

console.log(n)