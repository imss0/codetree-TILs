const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let x = 0;
while (n > 1) {
    n = n / 2;
    x++;
}

console.log(x);