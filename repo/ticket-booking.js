const { getModel } = require('../database')

const TICKET_BOOKING = 'TicketBooking'

const save = async (data) => {
    const TicketBooking = await getModel(TICKET_BOOKING)
    const tb = new TicketBooking(data)
    return tb.save()
}

const update = async (data) => {
    const tb = await getModel(TICKET_BOOKING)
    const { _id, ...rest } = data
    return tb.update({ _id }, { '$set': { ...rest } })
}

const find = async id => {
    const tb = await getModel(TICKET_BOOKING)
    return tb.findOne({ _id: id })
}

const remove = async id => {
    const tb = await getModel(TICKET_BOOKING)
    return tb.delete({ _id: id })
}

module.exports = { save, find, update, remove }