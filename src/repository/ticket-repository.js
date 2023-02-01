const { Op } = require("sequelize");
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

   async get(filter){
    try {
        const ticketAll = await NotificationTicket.findAll({
            where:{
                status:filter.status,
                notificationTime:{
                    [Op.lte]:new Date()
                }
            }
        })
        return ticketAll
    } catch (error) {
        console.log(error)
        throw error
    }
   }

   async destroy(ticketId){
    try {
       await NotificationTicket.destroy({
        where:{
            id:ticketId
        }
       })
        return true
    } catch (error) {
        console.log(error)
        throw error
    }
   }

   async update(ticketId,data){
    console.log(ticketId,data)
    try {
        const response = await NotificationTicket.findByPk(ticketId)
        if(data.status){
        response.status = data.status
        }
        await response.save()
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
   }
   
}

module.exports = TicketRepository