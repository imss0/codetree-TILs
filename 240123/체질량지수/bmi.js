const fs = require('fs');
const [height, weight] = fs.readFileSync(0).toString().split(" ");
const bmi = weight / (height/100 * height/100)
console.log(Math.floor(bmi));
if (bmi >= 25) console.log("Obesity")