const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n\n");
const arr1 = input[0].split("\n").map(row => row.split(" ").map(num => +num))
const arr2 = input[1].split("\n").map(row => row.split(" ").map(num => +num))

for (let i = 0; i < 3; i++) {
    let row = "";
    for (let j = 0; j < 3; j++) {
        row += `${arr1[i][j]*arr2[i][j]} `;
    }
    console.log(row)
}