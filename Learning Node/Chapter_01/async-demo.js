fs = require('fs');

function showDirectory(err, data) {
    console.log('data: ', data);
}

fs.readdir('D:/', showDirectory);

console.log("This comes after");