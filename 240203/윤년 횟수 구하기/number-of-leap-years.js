const fs = require('fs');
const n = +fs.readFileSync(0).toString().trim();

let lunar = 0;

for (let i = 1; i <= n; i++) {
    if (i % 4 === 0) {
        if (i % 100 !== 0) {
            lunar++;
        }
        if (i % 400 === 0) {
            lunar++;
        }
    }
}

console.log(lunar)