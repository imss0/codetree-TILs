const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = +input[0]
const prices = input[1].split(" ").map(Number);

let max = 0;

for (let i = 0; i < n - 1; i++) {
    let sellIdx = i + 1;
    while (sellIdx < n) {
        if (prices[sellIdx] - prices[i] > max) {
            max = prices[sellIdx] - prices[i];
        }
        sellIdx++;
    }
}
console.log(max)