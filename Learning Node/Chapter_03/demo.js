
// Read from Files
var fs = require('fs')

// var data = require('./data.json')

// console.log(data.name)

// fs.readFile('./data.json', 'utf-8', (err, data) => {
//     var data = JSON.parse(data)
//     console.log(data.name);
// })

// Access Directories
// fs.readdir('D:/', (err,data) => {
//     console.log(data)
// })

// Writing Files
var data = {
    name: 'Bob'
}

fs.writeFile('data2.json', JSON.stringify(data), (err) => {
    console.log('Write finished', err)
})