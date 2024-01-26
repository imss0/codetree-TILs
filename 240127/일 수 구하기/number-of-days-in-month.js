const fs = require('fs')
const input = +fs.readFileSync(0).toString().trim()

if (input === 2) console.log(28);
else if (input <= 7) {
    if (input % 2 === 1) console.log(31);
    else console.log(30);
} else {
    if (input % 2 === 1) console.log(30);
    else console.log(31);
}