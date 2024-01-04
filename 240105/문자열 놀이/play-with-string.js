const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

let [str, n] =[input[0].split(" ")[0], +input[0].split(" ")[1]]
const queries = input.slice(1).map(item => item.split(" "));

for (let i = 0; i < n; i++) {
    const type = queries[i][0];
    if (type === '1') {
        const [a, b] = [+queries[i][1], +queries[i][2]];
        if (a < b) {
            str = str.slice(0, a - 1) + str[b - 1] + str.slice(a, b - 1) + str[a - 1] + str.slice(b)
        } else [
            str = str.slice(0, b - 1) + str[a - 1] + str.slice(b, a - 1) + str[b - 1] + str.slice(a)
        ]
        console.log(str)
    } 
    else {
        const [a, b] =[queries[i][1], queries[i][2]]
        str = str.replaceAll(a, b);
        console.log(str)
    }
}