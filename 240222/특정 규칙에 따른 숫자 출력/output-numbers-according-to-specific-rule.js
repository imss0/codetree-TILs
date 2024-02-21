const fs = require('fs');
const n = +fs.readFileSync(0).toString();

let cnt = 1;
for (let i = 0; i < n; i++) {
    let res = "";
    for (let j = 0; j < i; j++) {
        res += " ";
        res += " ";
    }
    for (let j = i; j < n; j++) {
        res += `${cnt} `;
        if (cnt < 9) cnt++;
        else cnt = 1;
    }

    console.log(res)
}