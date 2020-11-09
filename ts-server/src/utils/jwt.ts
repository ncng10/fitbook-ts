const jwt = require("jsonwebtoken");
require("dotenv").config();
let secret_key = '1232312jmdmadad' || process.env.JWT_SECRET
function jwtGenerator(user_id: number) {
    const payload = {
        user: user_id
    }
    return jwt.sign(payload, secret_key, { expiresIn: "2h" });
}

module.exports = jwtGenerator;