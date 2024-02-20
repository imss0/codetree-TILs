const fs = require('fs')
const input = +fs.readFileSync(0).toString()

for (let i = 0; i < input; i++) {
    let row = ""
    for (let j = 0; j < input; j++) {
        if (j % 2 === 0) {
            row += i + 1;
        } else {
            row += input - i
        }
    }
        console.log(row)
}