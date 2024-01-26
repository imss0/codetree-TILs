const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n").map(item => item.split(" "));
const status = {
    a : 0,
    b : 0,
    c : 0,
    d : 0
}
for (let i = 0; i < input.length; i++) {
    if (input[i][0] === 'Y') {
        if (+input[i][1] >= 37) status.a++;
        else status.c++;
    } else {
        if (+input[i][1] >= 37) status.b++;
        else status.d++;
    }
}

if (status.a >= 2) console.log('E')
else console.log('N')