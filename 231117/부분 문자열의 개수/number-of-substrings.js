const fs = require('fs');
const [str, part]= fs.readFileSync(0).toString().trim().split("\n");
let count = 0;
for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === part[0] && str[i+1] === part[1]) {
        count++;
    }
}

console.log(count);