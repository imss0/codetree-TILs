const fs = require('fs');
const n = +fs.readFileSync(0).toString();

let prime = "";

for (let i = 1; i <= n; i++) {
   let partCnt = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
            partCnt++;
        }
    }
    if (partCnt === 2) prime += `${i} `;
}

console.log(prime)