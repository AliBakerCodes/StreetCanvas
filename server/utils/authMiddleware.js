// const jwt = require('jsonwebtoken');

// const authenticate = async (req, res, next) => {
//     const token = req.headers.authoritzation?.split(" ")[1] || ""

//     try {
//         const verified = jwt.verify(token, process.env.JWT_SECRET)
//         req.verifiedUser = verified
//         console.log("verification success!", verified)
//         next()
//     } catch (err) {
//         console.log("verification failed...")
//         next()
//     }
// }

// module.exports = { authenticate }