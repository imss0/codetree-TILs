const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

function getNum(str) {
    let num = "";
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(+str[i])) num += str[i];
    }
    return +num;
}

console.log(getNum(input[0]) + getNum(input[1]))