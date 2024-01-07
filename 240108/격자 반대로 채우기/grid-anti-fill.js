const fs = require("fs");
const n = +fs.readFileSync(0).toString().trim();
let res = Array(n).fill(0).map(() => Array(n).fill(0));
let num = 1;

for (let i = n - 1; i >= 0; i--) {
    if (i % 2 === 1) {
        for (let j = n - 1; j >= 0; j--) {
            res[j][i] = num;
            num++;
        }
    } else {
       for (let j = 0; j < n; j++) {
            res[j][i] = num;
            num++;
        } 
    }
}

for (let i = 0; i < n; i++) {
    console.log(res[i].join(" "));
}

// 4 4 - 4 3 - 4 2 - 4 1
// 3 1  3 2 - 3 3 - 3 4 
// 2 4 - 2 3 - 2 2 - 2 1
// 1 1 - 1 2 - 1 3 - 1 4