const cron = require('node-cron')
const TicketService = require('../services/email-service')
const mailAll = new TicketService()
const setupJobs = () =>{
    cron.schedule('*/2 * * * *',async()=>{
        console.log("yo bro")
        const response = await mailAll.fetchPendingEmails()
        console.log("all values",response)
        
    })
}



module.exports = {
    setupJobs
}