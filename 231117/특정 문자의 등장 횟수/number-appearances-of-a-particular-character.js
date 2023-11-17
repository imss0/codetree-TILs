const fs = require('fs');
const str = fs.readFileSync(0).toString().trim();
let ee = 0;
let eb = 0;
for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === 'e' && str[i+1] === 'e') {
        ee++;
    }
}


for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === 'e' && str[i+1] === 'b') {
        eb++;
    }
}

console.log(ee, eb)