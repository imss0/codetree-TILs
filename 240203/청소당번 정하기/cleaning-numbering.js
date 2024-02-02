const fs = require('fs');
const n = +fs.readFileSync(0).toString().trim();

let classroom = 0;
let corridor = 0;
let toilet = 0;

for (let i = 1; i <= n; i++) {
    if (i % 12 === 0) toilet++;
    else if (i % 3 === 0) corridor++;
    else if (i % 2 === 0) classroom++;
}

console.log(classroom, corridor, toilet);