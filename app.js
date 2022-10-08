
const express = require('express')
const app = express()

const http = require('http')
const server = http.createServer(app)

const {Server} = require('socket.io')
const io =  new Server(server)

io.on('connection',(socket)=>{
    // socket.on('chat',(msg)=>{
    //     console.log('Mensaje ' + msg)
    // })
    socket.on('chat', (msg)=>{
        io.emit('chat',msg)
    })
})

app.get('/',(req, res)=>{
    console.log(__dirname)
    res.sendFile(`${__dirname}/cliente/index.html`)
})

server.listen(3000, ()=>{
    console.log('Servidor corriendo en http://localhost:3000')
})
