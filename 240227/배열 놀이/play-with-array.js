const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n")
const [n, q] = input[0].split(" ").map(Number);
const items = input[1].split(" ").map(Number);

for (let i = 2; i < q + 2; i++) {
    const [queryType, ...queryParam] = input[i].split(" ").map(Number);
    switch(queryType) {
        case 1:
            console.log(items[queryParam[0] - 1])
            break;
        case 2: 
            let idx = items.indexOf(queryParam[0])
            let res = idx === -1 ? 0 : idx + 1;
            console.log(res);
            break;
        case 3:
            let str = "";
            for (let i = queryParam[0] - 1; i < queryParam[1]; i++) {
                str += items[i]
                str += " "
            }
            console.log(str);
            break;

    }
}