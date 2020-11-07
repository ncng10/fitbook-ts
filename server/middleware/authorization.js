const jwt = require('jsonwebtoken');
require("dotenv").config({ path: '../utils/.env' });
let secret_key = '1232312jmdmadad' || process.env.SECRET_KEY
module.exports = async (req, res, next) => {
    try {
        const jwtToken = req.header("token");
        if (!jwtToken) {
            return res.status(403).json("Not authorized");
        }
        const payload = jwt.verify(jwtToken, secret_key);
        req.user = payload.user

    } catch (err) {
        console.log(err.message)
        return res.status(403).json("Not authorized");
    }
    next();
}