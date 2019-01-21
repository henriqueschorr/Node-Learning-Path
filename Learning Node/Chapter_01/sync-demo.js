fs = require('fs');

data = fs.readdirSync('D:/');
console.log('data: ', data);

console.log("This comes after");