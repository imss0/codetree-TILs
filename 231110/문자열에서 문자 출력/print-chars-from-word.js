const fs = require("fs");
const str = fs.readFileSync(0).toString().trim();

for (let elem of str) {
    console.log(elem);
}