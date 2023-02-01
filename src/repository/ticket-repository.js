const { NotificationTicket } = require('../models/index')

class TicketRepository {
    /*
    constructor(){
        this.TicketModel = new NotificationTicket()  
    }
    */
   async create(data){
    try {
        const response = await NotificationTicket.create(data)
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
   }

   async getAll(){
    try {
        const ticketAll = await NotificationTicket.findAll()
        return ticketAll
    } catch (error) {
        console.log(error)
        throw error
        
    }
   }
   
}

module.exports = TicketRepository