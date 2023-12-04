const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");
let str = input[0];
let numbers = input.slice(1).map(Number);
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= str.length) {
        str = str.slice(0, -1);
    }
    else {
        let start = str.slice(0, numbers[i]);
        let end = str.slice(numbers[i]+1);
        str = start + end;
    }
    console.log(str);
}