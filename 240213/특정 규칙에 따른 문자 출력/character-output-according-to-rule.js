const fs = require("fs");
let n = +fs.readFileSync(0).toString();


for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = n - 2 - i; j >= 0; j--) {
        str += " ";
        str += " ";
    }
    for (let k = 1; k <= i + 1; k++) {
        str +=  "@ ";
    }
    console.log(str)
}

for (let i = 0; i < n - 1; i++) {
    let str = "";
    for (let j = n - 2 - i; j >= 0; j--) {
        str += "@ ";
    }
    console.log(str)
}