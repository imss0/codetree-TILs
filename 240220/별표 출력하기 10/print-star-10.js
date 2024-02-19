const fs = require("fs");
let n = +fs.readFileSync(0).toString();

let odd = '';
for (let i = 0; i < n * 2; i++) {
    let even = '';
    if (i % 2 === 0) {
        odd += '* '
        console.log(odd);
    }
    else {
        for (let j = 0; j <n - Math.floor(i/2); j++)
        even += '* ';
        console.log(even);
    }
}