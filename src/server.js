const express = require('express')
const server = express()
const routes = require("./routes.js")

server.set('view engine', 'ejs') 

//Enable statics folders
server.use(express.static("public"))

server.use(routes)
server.listen(3000, () => console.log('Rodando'))