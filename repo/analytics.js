const { getModel } = require('../database')

const TICKET_BOOKING = 'TicketBooking'
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const VISITED = 'visited'
const EARNED = 'earned'

const findByAggregate = async (from, to, field) => {
    const tb = await getModel(TICKET_BOOKING)
    const group = {
        "$group": {
            "_id": {
                "month": { "$month": "$performanceTime" }
            },
        }
    }
    if (field === VISITED) {
        group['$group']['summaryVisits'] = { "$sum": 1 }
    } else {
        group['$group']['summaryProfit'] = { "$sum": "$ticketPrice" }
    }
    const opts = [
        {
            "$match": {
                "performanceTime": { "$gte": from, "$lte": to }
            }
        },
        group,
        { "$sort": { "performanceTime": 1 } }
    ]
    try {
        const res = await tb.aggregate(opts)
        return res.map(each => {
            const { _id, ...rest } = each
            return { month: MONTHS[_id.month - 1], ...rest }
        })
    } catch (error) {
        return Promise.reject(error)
    }
}

const findByQuery = async (from, to, field) => {
    const tb = await getModel(TICKET_BOOKING)
    const docs = await tb.find({ performanceTime: { '$gte': from, '$lte': to } }, { performanceTime: 1, ticketPrice: 1 })
    const data = {}
    docs.forEach(each => {
        let sum = data[MONTHS[each.performanceTime.getMonth()]]
        if (!sum) {
            sum = 0
        }
        if (field === VISITED) {
            sum++
        } else {
            sum += each.ticketPrice
        }
        data[MONTHS[each.performanceTime.getMonth()]] = sum
    })
    return Object.entries(data).map(([month, summary]) => {
        if (field === VISITED) {
            return { month, summaryVisits: summary }
        } else {
            return { month, summaryProfit: summary }
        }
    })
}

const visitedAnalytics = async (from, to, aggregate) => {
    if (aggregate) {
        return await findByAggregate(from, to, VISITED)
    }
    return await findByQuery(from, to, VISITED)
}

const earnedAnalytics = async (from, to, aggregate) => {
    if (aggregate) {
        return await findByAggregate(from, to, EARNED)
    }
    return await findByQuery(from, to, EARNED)
}

module.exports = { visitedAnalytics, earnedAnalytics }