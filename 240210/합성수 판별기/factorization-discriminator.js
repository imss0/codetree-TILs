const fs = require("fs");
let n = +fs.readFileSync(0).toString();
let result = 'N';

if (n <= 3) result = 'N';
else {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) result = 'C';
    }
}

console.log(result);