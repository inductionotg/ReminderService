const bodyParser = require('body-parser')
const express = require('express')

const app = express()
const { PORT } = require('./config/serverConfig')
console.log(PORT)
const apiRoutes = require('./routes/index')
//const { sendBasicEmail } = require('./services/email-service')
const TicketService = require('./services/email-service')
console.log(TicketService)
const emailService = new TicketService()
const {setupJobs} = require('./utils/job')
console.log(emailService)

const setupAndStartServer = ()=>{
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
    app.use('/api',apiRoutes)
    app.listen(PORT, async()=>{
        console.log("server started at",PORT)
        /*
       await emailService.sendBasicEmail('flight2022booking@gmail.com',
        'ritesh2000.sinha@gmail.com',
        'mailChecking',
        'yes the mail came'
        )
        */
       /*
       const create = emailService.createTicket({
                    subject:"Requesting to Update",
                    content:"bhai Ganna sunna de",
                    recepientEmail:"ritesh2000.sinha@gmail.com",
                    notificationTime:'2023-01-01T18:30:00.000Z'})
       await create
       */
      //setupJobs()
    })
    
}

setupAndStartServer()