const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");
const char = input[input.length - 1];
const list = [];
for (let i = 0; i < input.length - 1; i++) {
    if(input[i][input[i].length - 1] === char) {
        list.push(input[i]);
    }
}

if (list.length === 0) {
    console.log('None');
} else {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}