const fs = require('fs');
const arr = fs.readFileSync(0).toString().split(" ").map(Number);

let min = arr[0];
let res = [];

for (let i = 1; i< arr.length; i++) {
    if (arr[i] < min) min = arr[i];
}

if (min === arr[0]) { res.push(1) }
else {res.push(0)}

if (arr[0] === arr[1] === arr[2]) {res.push(1)}
else {res.push(0)}

console.log(res.join(" "))