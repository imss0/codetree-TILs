const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

let [A, B, C, D, E] = [0, 0, 0, 0, false]
for (let i = 0; i < input.length; i++) {
    let symptom = input[i].split(" ")[0];
    let temperature = +input[i].split(" ")[1];
    if (symptom === 'Y') {
        if(temperature >= 37) {
                A++;
                if (A >= 2) E = true;
        }
        else C++;
    } else {
        if (temperature >= 37) {
            B++;
        } else D++;
    }
}
console.log(A, B, C, D, E === true ? 'E' : "")