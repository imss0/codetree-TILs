const fs = require('fs');
const [start, end] = fs.readFileSync(0).toString().split(" ").map(Number);

let cnt = 0;
for (let i = start; i <= end; i++) {
    let part = 0;
    for (let j = 1; j < i; j++) {
        if (i % j === 0) {
            part += j;
        }
    }
    if (part === i) cnt++;
}

console.log(cnt)