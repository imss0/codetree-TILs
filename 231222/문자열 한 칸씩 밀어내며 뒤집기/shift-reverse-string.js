const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split("\n");

let str = input[0].split(" ")[0];
const n = +input[0].split(" ")[1];
const queries = input.slice(1);

for (let i = 0; i < n; i++) {
 if (queries[i] === '1') {
  str = str.slice(1) + str.slice(0, 1);
  console.log(str)
 } 
 if (queries[i] === '2'){
  str = str.slice(-1) + str.slice(0, str.length - 1);
  console.log(str)
 }
 if (queries[i] === '3') {
  str = str.split("").reverse().join("");
  console.log(str);
 }
}