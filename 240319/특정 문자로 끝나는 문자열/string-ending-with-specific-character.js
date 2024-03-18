const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");
const keyChar = input[10];
let isExist = false;
for (let i = 0; i < 10; i++) {
    if (input[i][input[i].length - 1] === keyChar) {
        isExist = true;
        console.log(input[i])
    }
}
if (!isExist) console.log('None')