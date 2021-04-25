const { save, find, update, remove } = require('../repo/ticket-booking')

const confirmBooking = async (data) => {
    data.creationDate = new Date()
    let res = await save(data)
    if (res && res.length > 0) {
        res = res[0]
    }
    return res
}

const updateBooking = async (data) => {
    return update(data)
}

const getBookingDetails = async (id) => {
    return find(id)
}

const cancelBooking = async (id) => {
    return remove(id)
}

module.exports = { confirmBooking, updateBooking, getBookingDetails, cancelBooking }