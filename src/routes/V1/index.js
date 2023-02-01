const express = require('express')
const TicketController = require('../../controller/ticket-controller')
const router = express.Router()

router.post('/createticket',TicketController.createTicket)

module.exports = router