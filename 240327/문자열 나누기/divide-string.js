const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = +input[0];
const nums = input[1].split(" ").join("");

let row = "";
let i = 0;
while(i < nums.length) {
    while(row.length < 5 && nums[i]) {
        row += nums[i];
        i++;
    }
    console.log(row);
    row = "";
}