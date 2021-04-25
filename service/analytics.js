const { visitedAnalytics, earnedAnalytics } = require('../repo/analytics')

const getVisitedAnalytics = (from, to, aggregate) => {
    return visitedAnalytics(new Date(from), new Date(to), aggregate)
}

const getEarnedAnalytics = (from, to, aggregate) => {
    return earnedAnalytics(new Date(from), new Date(to), aggregate)
}

module.exports = { getEarnedAnalytics, getVisitedAnalytics }