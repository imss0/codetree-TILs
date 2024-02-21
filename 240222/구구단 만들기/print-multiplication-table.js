const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().split(" ").map(Number);

for (let i = 0; i < 9; i++) {
    let res = "";
    for (let j = b; j >= a; j = j-2) {
        res += ` ${j} * ${i + 1} = ${j * (i + 1)} /`
    }
    console.log(res.trim().slice(0, -2))
}