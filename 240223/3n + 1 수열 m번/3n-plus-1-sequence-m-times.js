const fs = require('fs');
const input = fs.readFileSync(0).toString().split("\n");
const m = +input[0]

for (let i = 0; i < m; i++) {
    let n = +input[i + 1];
    let cnt = 0;
    while (n !== 1) {
        if (n % 2 === 0) {
            n /= 2;
            cnt++;
        } else if (n % 2 === 1 && n !== 1) {
            n = n * 3 + 1;
            cnt++;
        } 
    }
    console.log(cnt);
}