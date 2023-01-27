const bodyParser = require('body-parser')
const express = require('express')

const app = express()
const { PORT } = require('./config/config')
const { sendBasicEmail } = require('./services/email-service')
console.log(PORT)

const setupAndStartServer = ()=>{
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
    app.listen(PORT, async()=>{
        console.log("server started at",PORT)
    })
    sendBasicEmail('flight2022booking@gmail.com',
    'sinha81178@gmail.com',
    'mailChecking',
    'Hey ritesh How are you'
    )
}

setupAndStartServer()