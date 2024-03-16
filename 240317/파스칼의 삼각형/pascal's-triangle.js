const fs = require('fs');
const n = +fs.readFileSync(0).toString();
const rows = [];

for (let i = 0; i < n; i++) {
    let rowNum = 1;
    let row = [];
    for (let j = 0; j < i + 1; j++) {
        if (i > 1) {
            let upperLeftNum = rows[i-1][j-1] ? rows[i-1][j-1]  : 0;
            let upperNum = rows[i-1][j] ? rows[i-1][j] : 0;
            rowNum = upperLeftNum + upperNum;
        }
        row.push(rowNum)
    }
    rows.push(row);
    console.log(row.join(" "))
}