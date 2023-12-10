const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

if (input === 'z') {
    console.log('a');
} else {
    console.log(String.fromCharCode(input.charCodeAt(0) + 1))
}