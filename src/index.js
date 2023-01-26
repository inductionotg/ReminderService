const bodyParser = require('body-parser')
const express = require('express')

const app = express()
const { PORT } = require('./config/config')

console.log(PORT)

const setupAndStartServer = ()=>{
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
    app.listen(PORT, async()=>{
        console.log("server started at",PORT)
    })
}

setupAndStartServer()