const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = +input[0]
const char = input[n + 1];
let count = 0;
let lengthSum = 0;
for (let i = 1; i < n + 1; i++) {
    if (input[i][0] === char) {
        count++;
        lengthSum += input[i].length;
    }
}


console.log(count, (lengthSum/count).toFixed(2))