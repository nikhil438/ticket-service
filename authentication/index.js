const jwt = require('jsonwebtoken');
const PRIVATE_KEY = '##N!KH!L##'

const getToken = (data) => {
    return jwt.sign({ data }, PRIVATE_KEY);
}

const verifyToken = token => {
    try {
        return jwt.verify(token, PRIVATE_KEY);
    } catch (error) {
        console.error('error while verifying token', error)
        return
    }
}

module.exports = { getToken, verifyToken }