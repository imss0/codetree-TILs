const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = +input[0]
const prices = input[1].split(" ").map(Number);

let max = 0;
let min_price = prices[0]

for (let i = 0; i < n; i++) {
    if (prices[i] < min_price) {
        min_price = prices[i]
    }
    if (prices[i] - min_price > max) {
        max = prices[sellIdx] - prices[i];
    }
}
console.log(max)