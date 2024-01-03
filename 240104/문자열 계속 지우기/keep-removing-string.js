const fs = require('fs');
let [a, b] = fs.readFileSync(0).toString().trim().split("\n");

while (a.includes(b)) {
    a = a.replaceAll(b, '');
}

console.log(a)