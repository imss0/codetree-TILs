const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n");
const sum = input.slice(1).map(Number).reduce((acc, curr) => acc + curr, 0).toString();

let res = "";
for (let i = 1; i < sum.length; i++) {
    res += sum[i];
}

res += sum[0];

console.log(res)