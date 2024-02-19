const fs = require("fs");
let n = +fs.readFileSync(0).toString();

let number = 2;

for (let i = 0; i < n; i++) {
    let res = "";
    for (let j = 0; j < n; j++) {
        res += `${number} `;
        number += 2;
        if (number > 8) number = 2;   
    }
    console.log(res)
}