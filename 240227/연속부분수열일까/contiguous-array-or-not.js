const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n1, n2] = input[0].split(" ").map(Number);

let result = 'No';

for (let i = 0; i < n1 - n2 + 1; i++) {
    const arr1 = input[1].split(" ").map(Number)
    const arr2 = input[2].split(" ").map(Number);

    let part = arr1.slice(i, i+n2);
    let res = 0;
    for (let j = 0; j < part.length; j++) {
        if (part[j] !== arr2[j]) res = res + 1;
    }
    if (res === 0) result = 'Yes';
}
console.log(result)