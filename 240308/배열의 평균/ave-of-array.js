const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const rows = input.map(row => row.split(" ").map(Number))
const rowAvgs = rows.map(row => row.reduce((acc, curr) => acc + curr/4, 0).toFixed(1))
const colAvgs = []
const allItems = [];
for (let i = 0; i < 4; i++) {
    colAvgs.push((rows[0][i] + rows[1][i]) / 2)
    for (let j = 0; j < 2; j++) {
        allItems.push(rows[j][i])
    }
}
console.log(rowAvgs.join(" "))
console.log(colAvgs.map(avg => avg.toFixed(1)).join(" "))
console.log((allItems.reduce((acc, curr) => acc + curr, 0) / 8).toFixed(1))