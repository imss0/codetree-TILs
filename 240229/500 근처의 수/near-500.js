const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const small = [];
const big = [];
let min = 1000;
let max = 0;

for (let i = 0; i < input.length; i++) {
    if (input[i] < 500) {
        small.push(input[i])
    } else {
        big.push(input[i])
    }
}

for (let i = 0; i < small.length; i++) {
    if (small[i] > max) max = small[i];
}
for (let i = 0; i < big.length; i++) {
    if (big[i] < min) min = big[i]
}

console.log(max, min)