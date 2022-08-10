const jwt = require('jsonwebtoken')

const createJWT = user => {
    return jwt.sign(user, "key", {
        expiresIn: "10 days"
    })
}

module.exports = { createJWT }