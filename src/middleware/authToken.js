const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        console.log(req.headers.token);
        let payload = jwt.verify(req.headers.token, "NEW_USER")
        console.log(4, payload);
        next()
    } catch (error) {
        return res.json({
            status: 401,
            message: error.message
        })
    }
}