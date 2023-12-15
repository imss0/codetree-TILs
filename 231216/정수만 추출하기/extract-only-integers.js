const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(" ");

function getFirstNum(str) {
    let firstNum = "";
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(+str[i])) firstNum += str[i];
        else break;
    }
    return +firstNum;
}

console.log(input.map(item => getFirstNum(item)).reduce((acc, curr) => acc + curr, 0));