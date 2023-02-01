const sender = require('../config/email-config')
const  htmlToSend = require('../utils/template')
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
                text:mailBody,
                html:htmlToSend,
                /*
                attachments:[
                    {
                        filename:'SMVT.PDF',
                        path:'./SMVT.pdf'
                    }
                ]
                */
            })
            
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
            const response = await this.ticketRepository.get({status:'PENDING'})
            return response
        } catch (error) {
            console.log(error)
        }
    }
    async destroy(ticketId){
        try {
            const response = await this.ticketRepository.destroy(ticketId)
            return response
        } catch (error) {
            console.log(error)
        }
    }

    async updateTicket(ticketId,data){
        try {
            const response = await this.ticketRepository.update(ticketId,data)
            return response
        } catch (error) {
            console.log(error)
        }
    }

}
module.exports = TicketService