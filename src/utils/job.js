const cron = require('node-cron')
const sender = require('../config/email-config')
const TicketService = require('../services/email-service')
const mailAll = new TicketService()
const setupJobs = () =>{
    cron.schedule('*/1 * * * *',async()=>{
        const response = await mailAll.fetchPendingEmails()
        response.forEach(email =>{
            sender.sendMail({
                to:email.recepientEmail,
                subject:email.subject,
                text:email.content
            }, async(err,data)=>{
                if(err){
                    console.log(err)
                }
                else {
                    console.log(data)
                    await mailAll.updateTicket(email.id,{status:'SUCCESS'})
                }
            })
            
            /*
            --This will also work but our transport will give a call back
            --In the callback there will be err, and data
            mailAll.sendBasicEmail(
            "sinhariteshku16@gmail.com",
            email.recepientEmail,
            email.subject,
            email.content
            )
        const update = mailAll.update(email.id,{status:'SUCCESS'})
        */

        });
        
    })
}



module.exports = {
    setupJobs
}