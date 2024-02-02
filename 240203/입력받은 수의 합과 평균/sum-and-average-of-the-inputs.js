const fs = require('fs');
const inputs = fs.readFileSync(0).toString().split("\n");

const n = +inputs[0];
const nums = inputs.slice(1).map(item => Number(item));

let sum = 0;

for (let i = 0; i < n; i++) {
    sum += nums[i];
}

console.log(sum, (sum / n).toFixed(1))