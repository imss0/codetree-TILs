const fs = require('fs');
const input = fs.readFileSync(0).toString().split("\n")
const n = +input[0];

let cnt = 0;
for (let i = 1 ; i <= n; i++) {
    const score = input[i].split(" ").map(Number).reduce((acc, curr) => acc + curr, 0) / 4;
    if (score >= 60) {
        console.log('pass');
        cnt++;
    } else {
        console.log('fail')
    }
}
console.log(cnt)