const isNotEmpty = obj => {
    if (!obj) {
        return false
    }
    if (obj instanceof Object) {
        return Object.keys(obj).length === 0
    }
    if (obj instanceof Array) {
        return obj.length === 0
    }
    return true
}

const validateDate = val => {
    if (!isNotEmpty(val)) {
        return false
    }
    const date = new Date()
    const bookingDate = new Date(val)
    return bookingDate > date
}

const validateDateRange = (from, to) => {
    if (!isNotEmpty(from)) {
        return 'From date is empty'
    }
    if (!isNotEmpty(to)) {
        return 'To date is empty'
    }
    try {
        from = new Date(from)
    } catch (error) {
        return 'From date is invalid'
    }
    try {
        to = new Date(to)
    } catch (error) {
        return 'To date is invalid'
    }
    if (from > to) {
        return 'From date is always before to data'
    }
}

const validateReq = (req, method) => {
    let fields = [];
    switch (method) {
        case 'confirm':
            fields = [{ field: 'customerName', func: isNotEmpty }, { field: 'performanceTitle', func: isNotEmpty }, { field: 'performanceTime', func: isNotEmpty }, { field: 'ticketPrice', func: isNotEmpty }]
            break;
        case 'update':
            fields = [{ field: '_id', func: isNotEmpty }, { field: 'creationDate', func: isNotEmpty }, { field: 'customerName', func: isNotEmpty }, { field: 'performanceTitle', func: isNotEmpty }, { field: 'performanceTime', func: isNotEmpty }, { field: 'ticketPrice', func: isNotEmpty }]
            break;
        case 'fetch':
            fields = [{ field: 'id', func: isNotEmpty }]
            break;
        case 'cancel':
            fields = [{ field: 'id', func: isNotEmpty }]
            break;
        default:
            break;
    }

    if (fields.length === 0) {
        return 'Empty request'
    }

    const obj = (['confirm', 'update'].indexOf(method) > -1 ? req.body : req.params) || {}
    for (const each of fields) {
        const res = each.func(obj[each.field])
        if (!res) {
            switch (each.func.name) {
                case 'isNotEmpty':
                    return `${each.field} is empty`
                case 'validateDate':
                    return `${each.field} is invalid`
            }
        }
    }
    return
}

module.exports = { validateReq, validateDateRange }