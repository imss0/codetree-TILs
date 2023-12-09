const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(" ");
let res = "";
res += a.charCodeAt(0);
res += " ";
res += String.fromCharCode(b);
console.log(res)