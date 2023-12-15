const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
let res = 0;

for (let i = 0; i < input.length; i++) {
    if (!isNaN(+input[i])) {
        res += +input[i];
    }
}
console.log(res)