var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var mongoose = require('mongoose')

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

var dbUrl = 'mongodb://user:node18@ds035177.mlab.com:35177/learning-node'

var messages = [
    {name: 'Tim', message: 'Hi'},
    {name: 'Jane', message: 'Hello'},
]

app.get('/messages', (req, res) => {
    res.send(messages)
})

app.post('/messages', (req, res) => {
    messages.push(req.body)
    io.emit('message', req.body)
    console.log(req.body)
    res.sendStatus(200)
})

io.on('connection', (socket) => {
    console.log('User connected')
})

mongoose.connect(dbUrl, { useNewUrlParser: true }, (err) => {
    console.log('Mongo DB Connection', err)
})

var server = http.listen(3000, () => {
    console.log('Server is listening on port ', server.address().port)
})