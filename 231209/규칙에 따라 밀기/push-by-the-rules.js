const fs = require('fs');
let [str, rules] = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 0; i < rules.length; i++) {
   if (rules[i] === 'R') {
     str = str.slice(-1) +str.slice(0, -1);
   } else {
    str = str.slice(1) + str.slice(0, 1); 
   }
}

console.log(str);