const express = require('express');
const { validateDateRange } = require('../util/validation')
const { getEarnedAnalytics, getVisitedAnalytics } = require('../service/analytics')

const router = express.Router({ mergeParams: true });

router.get('/earned', async (req, res) => {
    const { from, to, method } = req.query
    const errMsg = validateDateRange(from, to)
    if (errMsg && errMsg.length > 0) {
        return res.status(400).send({ error: errMsg })
    }
    try {
        const bookingDetails = await getEarnedAnalytics(from, to, method)
        if (!bookingDetails || bookingDetails.length === 0) {
            return res.status(404).json({ error: 'Analytics not found' })
        }
        res.json(bookingDetails)
    } catch (error) {
        console.error(error.message, error)
        res.status(500).json({ error: 'Error occured while confirming booking' })
    }
})

router.get('/visited', async (req, res) => {
    const { from, to, method } = req.query
    const errMsg = validateDateRange(from, to)
    if (errMsg && errMsg.length > 0) {
        return res.status(400).send({ error: errMsg })
    }
    try {
        const bookingDetails = await getVisitedAnalytics(from, to, method)
        if (!bookingDetails || bookingDetails.length === 0) {
            return res.status(404).json({ error: 'Analytics not found' })
        }
        res.json(bookingDetails)
    } catch (error) {
        console.error(error.message, error)
        res.status(500).json({ error: 'Error occured while confirming booking' })
    }
})

module.exports = router