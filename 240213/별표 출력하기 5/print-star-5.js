const fs = require("fs");
let n = +fs.readFileSync(0).toString();


for (let i = 0; i < n; i++) { // 세로줄
    let str = "";
    let res = "";
    let j = 0;
    let k = 0;
    while (j < n - i) {
        str += "*";
        j++;
    }
    while (k < n - i) {
        res += str;
        res += " "
        k++;
    }
    console.log(res)
}