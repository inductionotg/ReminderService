const TicketService = require('../services/email-service')
const ticketService = new TicketService()
const createTicket =async(req,res)=>{
    try {
        console.log(req.body)
        const response =await ticketService.createTicket(req.body)
        return res.status(201).json({
            success:true,
            messgae:'Ticket got created successfully',
            data:response,
            error:{}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            messgae:'Ticket Not created successfully',
            data:{},
            error:error
        })
    }
}

module.exports = {
    createTicket
}