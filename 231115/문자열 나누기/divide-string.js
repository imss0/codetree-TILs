const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");
let numbers = input[1].split(" ").join("");

while(numbers.length > 0) {
    console.log(numbers.slice(0, 5))
    numbers = numbers.slice(5);
}