const fs = require("fs");
const inputs = fs.readFileSync(0).toString().trim().split("\n");
const n = +inputs[0]
const list = inputs[1].split(" ").map(Number);

let max = list[0]
let second = Number.MIN_SAFE_INTEGER
for (let i = 0; i < n; i++) {
    if (list[i] > max) {
        max = list[i];
    }
    else if (list[i] >= second) {
        second = list[i];
    }
}

console.log(max, second)