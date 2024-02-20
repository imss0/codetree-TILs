const fs = require('fs')
const input = +fs.readFileSync(0).toString()

let cnt = 0;
for (let i = 0; i < input; i++) {
    let row = ""
    for (let j = 0; j < input; j++) {
        if (i % 2 === 0) {
            if (i > 0 && j === 0) cnt += input - 1;
            cnt++;
            row += `${cnt} `
        } else {
            if (j === 0) cnt += input;
            else cnt--;
            row += `${cnt} `
        }
    }
        console.log(row)
}