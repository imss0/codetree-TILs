const fs = require('fs');
const [student1, student2]  = fs.readFileSync(0).toString().split("\n").map(item => item.split(" ").map(Number));

if (student1[0] > student2[0]) console.log('A');
if (student2[0] > student1[0]) console.log('B');
if (student1[0] === student2[0]) {
    if (student1[1] > student2[1]) console.log('A');
    if (student2[1] > student1[1]) console.log('B');
}