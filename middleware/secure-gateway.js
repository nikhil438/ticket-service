const { verifyToken } = require('../authentication')

const validateToken = (req, res) => {
    const token = req.headers.authorization || req.query.authorization
    if (!token || token.trim().length === 0 || !verifyToken(token)) {
        res.status(401).send({ error: 'AUTHENTICATION_FAILED' })
        return
    }
    return true
}

const secure = (req, res, next) => {
    if(['/','/api-docs'].indexOf(req.path) > -1 ){
        next()
        return
    }
    if (!validateToken(req, res)) {
        return
    }
    next()
}

module.exports = secure