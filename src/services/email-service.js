const sender = require('../config/email-config')
const  TicketRepository  = require('../repository/ticket-repository')
/*
const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody)=>{
    try{
        const response =await sender.sendMail({
            from:mailFrom,
            to:mailTo,
            subject:mailSubject,
            text:mailBody
        })
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}
*/
class TicketService {

    constructor(){
        this.ticketRepository = new TicketRepository()
    }

   async sendBasicEmail (mailFrom, mailTo, mailSubject, mailBody){
        try {
            const response =await sender.sendMail({
                from:mailFrom,
                to:mailTo,
                subject:mailSubject,
                text:mailBody
            })
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    async createTicket(data){
        console.log("data from conrtoller",data)
        try {
            const response = await this.ticketRepository.create(data)
            return response
        } catch (error) {
            console.log(error)
        }
    }

    async fetchPendingEmails(){
        try {
            const response = await this.ticketRepository.getAll()
            return response
        } catch (error) {
            console.log(error)
        }
    }

}
module.exports = TicketService