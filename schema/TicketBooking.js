const { Schema } = require('mongoose')

const NAME = 'ticket-booking'

const SCHEMA = new Schema({
    creationDate: { type: Date, index: true },
    customerName: { type: String, index: true },
    performanceTitle: { type: String, index: true },
    performanceTime: Date,
    ticketPrice: Number
}, { collection: NAME })
SCHEMA.index({ creationDate: 1, performanceTime: 1, customerName: 1 })

module.exports = { NAME, SCHEMA }