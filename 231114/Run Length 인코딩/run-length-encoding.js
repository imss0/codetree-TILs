const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
let str = "";
let count = 0;
for (let i = 0; i < input.length; i++) {
   if (i === 0) {
    str += input[i];
    count++;
   }
   if (i > 0) {
    if (input[i] === input[i-1]) {
        count++;
    } else {
        str += count;
        str += input[i];
        count = 1;
    }
   }
}

console.log((str+count).length)
console.log(str+count)