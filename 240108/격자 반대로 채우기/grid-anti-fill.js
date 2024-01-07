const fs = require("fs");
const n = +fs.readFileSync(0).toString().trim();
let res = Array(n).fill(0).map(() => Array(n).fill(0));
let num = 1;

if (n % 2 === 1) {
    for (let i = n - 1; i >= 0; i--) {
        if (i % 2 === 1) {
            for (let j = 0; j < n; j++) {
                res[j][i] = num;
                num++;
            }
        } else {
        for (let j = n - 1; j >= 0; j--) {
                res[j][i] = num;
                num++;
            } 
        }
    }
}

if (n % 2 === 0) {
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
}

for (let i = 0; i < n; i++) {
    console.log(res[i].join(" "));
}