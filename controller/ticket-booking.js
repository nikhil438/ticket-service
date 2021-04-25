const express = require('express');
const { confirmBooking, updateBooking, getBookingDetails, cancelBooking } = require('../service/ticket-booking')
const { validateReq } = require('../util/validation')

const router = express.Router({ mergeParams: true });

router.post('/confirm', async (req, res) => {
    const errMsg = validateReq(req, 'confirm')
    if (errMsg && errMsg.length > 0) {
        return res.status(400).send({ error: errMsg })
    }
    try {
        const data = req.body
        const bookingDetails = await confirmBooking(data)
        if (!bookingDetails) {
            return res.status(500).json({ error: 'Error occured while confirming booking' })
        }
        res.json(bookingDetails)
    } catch (error) {
        console.error(error.message, error)
        res.status(500).json({ error: 'Error occured while confirming booking' })
    }
})

router.put('/update', async (req, res) => {
    const errMsg = validateReq(req, 'update')
    if (errMsg && errMsg.length > 0) {
        return res.status(400).send({ error: errMsg })
    }
    try {
        const data = req.body
        const bookingDetails = await updateBooking(data)
        if (!bookingDetails) {
            return res.status(404).json({ error: 'Booking details not found' })
        }
        res.json(bookingDetails)
    } catch (error) {
        console.error(error.message, error)
        res.status(500).json({ error: 'Error occured while confirming booking' })
    }
})

router.get('/fetch/:id', async (req, res) => {
    const errMsg = validateReq(req, 'fetch')
    if (errMsg && errMsg.length > 0) {
        return res.status(400).send({ error: errMsg })
    }
    try {
        const bookingDetails = await getBookingDetails(req.params.id)
        if (!bookingDetails) {
            return res.status(404).json({ error: 'Booking details not found' })
        }
        res.json(bookingDetails)
    } catch (error) {
        console.error(error.message, error)
        res.status(500).json({ error: 'Error occured while fetching booking details' })
    }
})

router.delete('/cancel/:id', async (req, res) => {
    const errMsg = validateReq(req, 'cancel')
    if (errMsg && errMsg.length > 0) {
        return res.status(400).send({ error: errMsg })
    }
    try {
        const data = await cancelBooking(req.params.id)
        if (!data) {
            return data.status(404).json({ error: 'Booking details not found' })
        }
        data.json({ success: 'Booking cancelled successfully' })
    } catch (error) {
        console.error(error.message, error)
        res.status(500).json({ error: 'Error occured while fetching booking details' })
    }
})

module.exports = router