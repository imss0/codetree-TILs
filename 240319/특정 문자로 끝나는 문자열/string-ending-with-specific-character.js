const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");
const keyChar = input[10];
for (let i = 0; i < 10; i++) {
    if (input[i][input[i].length - 1] === keyChar) {
        console.log(input[i])
    }
}