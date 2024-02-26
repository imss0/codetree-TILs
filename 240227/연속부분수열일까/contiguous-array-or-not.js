const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n1, n2] = input[0].split(" ").map(Number);

let result = 'No';

for (let i = 0; i < n1 - n2 + 1; i++) {
    const arr1 = input[1].split(" ").map(Number)
    const arr2 = input[2].split(" ").map(Number);

    if (arr1[i] === arr2[i] && arr1[i+1] === arr2[i+1]) result = 'Yes'
}
console.log(result)