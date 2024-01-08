const fs = require("fs");
const [n, m]= fs.readFileSync(0).toString().trim().split(" ").map(Number);
let res = Array(n).fill(0).map(() => Array(m).fill(0));
let num = 0;

for (let i = 0; i < m; i++) {
    if (i % 2 === 0) {
        for (let j = 0; j < n; j++) {
            res[j][i] = num;
            num++;
        }
    }
    if (i % 2 === 1) {
        for (let j = n - 1; j >= 0; j--) {
            res[j][i] = num;
            num++;
        }
    }
}

for (let i = 0; i < n; i++) {
    console.log(res[i].join(" "));
}